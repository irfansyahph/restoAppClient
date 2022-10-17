import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsAction } from "../redux/actions";
import { View, StyleSheet, ScrollView } from "react-native";
import { Text } from "@rneui/themed";
import CardProduct from "../Components/CardProduct";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Menu = (props) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getProductsAction())
    }, [])

    const { products } = useSelector((state) => {
        return {
            products: state.productReducer.listProducts,
        }
    })

    const renderProducts = () => {
        return products.map((val, idx) => {
            return (
                <View key={idx} style={{ width: wp(46) }}>
                    <CardProduct data={val}
                        toDetail={() => props.navigation.navigate("Detail", { detail: val })}
                    />
                </View>
            )
        })
    }

    return (
        <View>
            <ScrollView>
                <Text h2 style={{ marginLeft: 15 }}>Menu</Text>
                <View style={style.viewProduct}>
                    {renderProducts()}
                </View>
            </ScrollView>
        </View>
    )
}

const style = StyleSheet.create({
    viewProduct: {
        flex: 1,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginHorizontal: wp(3)
    }
})

export default Menu;