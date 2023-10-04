import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Adress from "./Adress";
import React from "react";

function Home({ navigation }){
    const Tab = createBottomTabNavigator();

    return(
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={Adress} />
            <Tab.Screen name="Messages" component={Adress} />
        </Tab.Navigator>
    )
}

export default Home;