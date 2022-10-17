import React from 'react';
import { FlatList, Image, View, Alert } from 'react-native'
import { Button, Card, Text, Icon } from "@rneui/themed"
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';

const cartUser = [
    {
        "id": 1,
        "name": "makanan",
        "type": 0,
        "price": 25000,
        "image": "https://img.freepik.com/free-photo/delicious-healthy-asian-food-gray-textured-background-with-copy-space_24972-1024.jpg?w=1480&t=st=1665829627~exp=1665830227~hmac=39fef814ca7eb86c36f3d70688e3c3763e5e88612df412f2e0b6da4bcf9bf83f"
    },
    {
        "id": 2,
        "name": "minuman",
        "type": 1,
        "price": 15000,
        "image": "https://img.freepik.com/free-photo/delicious-healthy-asian-food-gray-textured-background-with-copy-space_24972-1024.jpg?w=1480&t=st=1665829627~exp=1665830227~hmac=39fef814ca7eb86c36f3d70688e3c3763e5e88612df412f2e0b6da4bcf9bf83f"
    }
];

const Order = (props) => {
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
                                <Button type="outline" icon={
                                    <Icon type="feather" name="minus" size={15} />
                                }
                                // onPress={() => btDec(index)}
                                />
                                <Text h4 style={{ marginHorizontal: 10 }}>1</Text>
                                <Button type="outline" icon={
                                    <Icon type="feather" name="plus" size={15} />
                                }
                                // onPress={() => btInc(index)} 
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
                    <Text h4>Rp. 40000</Text>
                </View>
                <Button
                    title="Checkout"
                    buttonStyle={{ backgroundColor: "tomato", borderRadius: 5 }}
                // onPress={btCheckout}
                />
            </View>
        </View>
    )
}

export default Order;