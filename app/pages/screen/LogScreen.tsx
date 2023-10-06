import React from 'react';
import {
    Image,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text, TextInput, TouchableOpacity,
    useColorScheme,
    View,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import Login from "../Login";
import SignUp from "../SignUp";
import Adress from "../Adress";
import FirstOpen from "../FirstOpen";
import SignUpform from "../Signupform";

const Stack = createNativeStackNavigator();

function LogScreen(){
    return(
            <Stack.Navigator
                screenOptions={{headerShown: true}}>
                <Stack.Screen name="FirstPage" component={FirstOpen} />
                <Stack.Screen name="LoginForm" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="signUpform" component={SignUpform}/>
                <Stack.Screen name="Adress" component={Adress}/>
            </Stack.Navigator>
    )
}

export default LogScreen;