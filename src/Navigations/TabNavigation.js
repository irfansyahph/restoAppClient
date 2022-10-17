import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Menu from "../Pages/Menu";
import Order from "../Pages/Order"
import Icon from 'react-native-vector-icons/MaterialIcons';

const Tab = createBottomTabNavigator()
const TabNavigation = (props) => {
    return (
        <Tab.Navigator initialRouteName="Menu"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Menu') {
                        iconName = focused
                            ? 'fastfood'
                            : 'fastfood';
                    } else if (route.name === 'My Order') {
                        iconName = focused ? 'receipt-long' : 'receipt-long';
                    }

                    // You can return any component that you like here!
                    return <Icon name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Menu" component={Menu} options={{ headerShown: false }} />
            <Tab.Screen name="My Order" component={Order} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}

export default TabNavigation