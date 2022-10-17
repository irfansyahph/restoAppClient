import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from "../Pages/Home";
import TabNavigation from "./TabNavigation";
import DetailProduct from "../Pages/DetailProduct";

const Stack = createNativeStackNavigator()
const StackNavigation = (props) => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="TabNavigation" component={TabNavigation} options={{ headerShown: false }} />
            <Stack.Screen name="Detail" component={DetailProduct} />
        </Stack.Navigator>
    )
}

export default StackNavigation