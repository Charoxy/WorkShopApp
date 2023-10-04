import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import FirstOpen from "../FirstOpen";
import React from "react";

function HomeScreen() {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={FirstOpen} />
            <Tab.Screen name="Messages" component={FirstOpen} />
        </Tab.Navigator>
    );
}

export default HomeScreen;