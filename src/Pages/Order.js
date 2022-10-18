import React, { useEffect, useState } from 'react';
import { FlatList, Image, View, Alert } from 'react-native'
import { Button, Card, Text, Icon } from "@rneui/themed"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

const Order = () => {
    const isFocused = useIsFocused()

    const [cartUser, setCartUser] = useState([])

    useEffect(() => {
        if (isFocused) {
            AsyncStorage.getItem("@AddCart")
                .then((values) => {
                    if (values !== null) {
                        setCartUser(JSON.parse(values))
                        console.log('data cartuser', values)
                    } else {
                        setCartUser([])
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }, [isFocused])

    const clear = async () => {
        AsyncStorage.removeItem("@AddCart")
        console.log('berhasil remove')
        setCartUser([])
    }

    const btCheckout = async () => {
        Alert.alert(
            "Confirmation",
            "Are you sure to make an order?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => clear() }
            ]
        );
    }

    const totalPayment = () => {
        let total = 0;
        cartUser.forEach(item => {
            total += item.price * item.qty
        })
        return total
    }

    const btInc = (idx) => {
        let temp = [...cartUser]
        temp[idx].qty += 1
        AsyncStorage.setItem("@AddCart", JSON.stringify(temp))
        setCartUser(temp)
    }

    const btDec = (idx) => {
        let temp = [...cartUser]
        if (temp[idx].qty == 1) {
            temp.splice(idx, 1)
        } else {
            temp[idx].qty -= 1
        }
        AsyncStorage.setItem("@AddCart", JSON.stringify(temp))
        setCartUser(temp)
    }

    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <Text h2>Detail Order</Text>
            <FlatList
                data={cartUser}
                renderItem={({ item, index }) => (
                    <Card key={index} containerStyle={{ width: wp(100), margin: 0 }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-around" }}>
                            <Image source={{ uri: item.image }} style={{ width: wp(16), height: hp(9) }} />
                            <View>
                                <Text>{item.name}</Text>
                                <Text>Rp. {item.price}</Text>
                            </View>
                            <View style={{ flexDirection: "row" }}>
                                <Button type="outline" buttonStyle={{ borderColor: 'tomato', borderRadius: 50 }}
                                    icon={
                                        <Icon type="feather" name="minus" size={16} color="tomato" />
                                    }
                                    onPress={() => btDec(index)}
                                />
                                <Text h4 style={{ marginHorizontal: 10 }}>{item.qty}</Text>
                                <Button type="outline" buttonStyle={{ borderColor: 'tomato', borderRadius: 50 }}
                                    icon={
                                        <Icon type="feather" name="plus" size={16} color="tomato" />
                                    }
                                    onPress={() => btInc(index)}
                                />
                            </View>
                        </View>
                    </Card>
                )}
                keyExtractor={(item, index) => index.toString()}
                style={{ marginTop: wp(2) }}
            />
            <View style={{ padding: wp(3), flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                <View>
                    <Text>Total Payment</Text>
                    <Text h4>Rp. {totalPayment()}</Text>
                </View>
                <Button
                    title="Checkout"
                    buttonStyle={{ backgroundColor: "tomato", borderRadius: 5 }}
                    onPress={btCheckout}
                />
            </View>
        </View>
    )
}

export default Order;