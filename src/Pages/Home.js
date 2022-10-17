import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { loginAction } from "../redux/actions";
import { View, StyleSheet } from "react-native";
import { Button, Text, Input, Icon } from "@rneui/themed";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
import { StackActions } from "@react-navigation/native";

const Home = (props) => {
    const dispatch = useDispatch()

    const [tableNumber, setTableNumber] = useState("")

    const { iduser } = useSelector((state) => {
        return {
            iduser: state.userReducer.id
        }
    })

    useEffect(() => {
        if (iduser) {
            props.navigation.dispatch(StackActions.replace("TabNavigation"))
        }
    })

    const btLogin = () => {
        dispatch(loginAction(tableNumber))
    }

    const btToMenu = () => {
        props.navigation.navigate("TabNavigation")
    }

    return (
        <View style={styles.container}>
            <Text h2>WAREG</Text>
            <View >
                <Input
                    placeholder="Table Number"
                    keyboardType="numeric"
                    inputStyle={{ fontSize: 15, textAlign: "center" }}
                    containerStyle={{ width: wp("35%"), alignSelf: "center" }}
                    onChangeText={val => setTableNumber(val)}
                />
                {/* <Input
                    placeholder="password"
                    inputStyle={{ backgroundColor: "white" }}
                    leftIcon={
                        <Icon
                            type="feather"
                            name="lock"
                        />
                    }
                    inputContainerStyle={{ backgroundColor: "white" }}
                    containerStyle={{ width: wp("70%") }}
                    secureTextEntry
                    onChangeText={val => setPass(val)}
                /> */}
                <Button
                    title="Tap To See Menu"
                    buttonStyle={{ backgroundColor: "tomato" }}
                    containerStyle={{ width: wp("60%"), alignSelf: "center" }}
                    onPress={btLogin}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    splashScreen: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center"
    },
});

export default Home;