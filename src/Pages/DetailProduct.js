import React, { useState } from 'react';
import { Alert, FlatList, Image, KeyboardAvoidingView, ScrollView, View } from 'react-native';
import { Button, Card, Icon, Input, Text } from '@rneui/themed';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DetailProduct = (props) => {
    const { detail } = props.route.params
    const [qty, setQty] = useState(1)

    const btInc = () => {
        let tempValue = qty;
        tempValue++
        setQty(parseInt(tempValue));
    }

    const btDec = () => {
        let tempValue = qty;
        tempValue--
        setQty(parseInt(tempValue));
    }

    const btAddToCart = async () => {
        try {
            await AsyncStorage.setItem(
                `@AddCart`, JSON.stringify([detail])
            )
            console.log('sukses')
        } catch (error) {
            console.log(error)
        }
    }

    const btGetcart = async () => {
        try {
            const value = await AsyncStorage.getItem('@AddCart');
            console.log('value', value)
        } catch (error) {
            console.log('error', error)
        }
    }

    return (
        <KeyboardAvoidingView behavior="position" style={{ flex: 1, backgroundColor: "white" }} keyboardVert1icalOffset={100}>
            <View style={{ height: hp(50), width: wp(100) }}>
                <FlatList
                    data={detail.image}
                    renderItem={() => (
                        <Image source={{ uri: detail.image }} style={{ width: wp(100), height: hp(50) }} />
                    )}
                    keyExtractor={(item, index) => index.toString()}
                    scrollEnabled={false}
                />
            </View>
            <View>
                <Card containerStyle={{ width: wp(100), margin: 0 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 25 }}>{detail.name}</Text>
                    <ScrollView style={{ height: hp(10), marginBottom: hp(2) }}>
                        <Text style={{ textAlign: "justify" }}>EnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnakEnak</Text>
                    </ScrollView>
                    <Card.Divider />
                    <Text style={{ fontSize: 20 }}>Rp. {detail.price}</Text>
                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                        <Button
                            buttonStyle={{ borderColor: 'tomato', borderRadius: 50 }}
                            type="outline"
                            icon={
                                <Icon type="feather" name="minus" size={16} color="tomato" />
                            }
                            disabled={qty == 1}
                            onPress={btDec}
                        />
                        <Input placeholder="Qty" keyboardType="numeric"
                            containerStyle={{ width: wp(25) }}
                            inputStyle={{ textAlign: "center" }}
                            onChangeText={(e) => setQty(parseInt(e))}
                            defaultValue={qty.toString()}
                        />
                        <Button
                            buttonStyle={{ borderColor: 'tomato', borderRadius: 50 }}
                            type="outline"
                            icon={
                                <Icon type="feather" name="plus" size={16} color="tomato" />
                            }
                            onPress={btInc}
                        />
                    </View>
                    <Button
                        buttonStyle={{ borderRadius: 50, borderColor: 'tomato', backgroundColor: 'tomato' }}
                        titleStyle={{ color: 'white', fontSize: 14 }}
                        title="Add To My Order"
                        type="solid"
                        icon={
                            <Icon
                                name="shopping-cart"
                                type="feather"
                                color="white"
                                size={16}
                                containerStyle={{ marginHorizontal: wp(4) }}
                            />
                        }
                        iconRight
                        onPress={btAddToCart}
                    />
                    <Button
                        onPress={btGetcart}
                    />
                </Card>
            </View>
        </KeyboardAvoidingView>
    )
}

export default DetailProduct;