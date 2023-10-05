import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import FirstOpen from "../FirstOpen";
import React from "react";
import Account from "../Account";

function HomeScreen() {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={FirstOpen} />
            <Tab.Screen name="Sport" component={FirstOpen} />
            <Tab.Screen name="Event" component={FirstOpen} />
            <Tab.Screen name="Produit" component={FirstOpen} />
            <Tab.Screen name="Account" component={Account} />
        </Tab.Navigator>
    );
}

export default HomeScreen;