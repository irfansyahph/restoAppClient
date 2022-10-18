import React, { useEffect, useState } from 'react';
import { FlatList, Image, KeyboardAvoidingView, ScrollView, View } from 'react-native';
import { Button, Card, Icon, Input, Text } from '@rneui/themed';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';

const DetailProduct = (props) => {
    const isFocused = useIsFocused()

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

    useEffect(() => {
        if (isFocused) {
            console.log('asdasdasd')
            AsyncStorage.getItem('@AddCart')
                .then((values) => {
                    console.log('object', values)
                    if (values !== null) {
                        const cart = JSON.parse(values)
                        console.log('ini dari cart', cart)
                        let searchProduct = cart.filter(val => val.id == detail.id)
                        if (searchProduct.length > 0) {
                            setQty(searchProduct[0].qty)
                        }
                    }
                })
        }
    }, [isFocused])

    const btAddToCart = async () => {
        try {
            AsyncStorage.getItem(`@AddCart`)
                .then(cart => {
                    cart = cart == null ? [] : JSON.parse(cart)
                    // let temp = [...cart]
                    let idxSearchProduct = null;
                    const searchProduct = cart.filter((val, idx) => {
                        if (val.id == detail.id) {
                            idxSearchProduct = idx
                            return val
                        }
                    })
                    if (searchProduct.length > 0) {
                        cart[idxSearchProduct].qty = qty
                    } else {
                        cart.push({ ...detail, qty })
                    }
                    console.log('sukses')
                    return AsyncStorage.setItem(`@AddCart`, JSON.stringify(cart))
                })
            props.navigation.goBack()
        } catch (error) {
            console.log(error)
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
                        <Text style={{ textAlign: "justify" }}>{detail.description}</Text>
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
                </Card>
            </View>
        </KeyboardAvoidingView>
    )
}

export default DetailProduct;