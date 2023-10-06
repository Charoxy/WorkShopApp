import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import FirstOpen from "../FirstOpen";
import React from "react";
import Swipe from "../Swipe";
import Account from "../Account";

function HomeScreen() {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator
            screenOptions={{headerShown: false}}>
            <Tab.Screen name="Sport" component={Swipe} />
            <Tab.Screen name="Event" component={Swipe} />
            <Tab.Screen name="Produit" component={Swipe} />
            <Tab.Screen name="Account" component={Account} />
        </Tab.Navigator>
    );
}

export default HomeScreen;