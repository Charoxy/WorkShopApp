/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text, TextInput,
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
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstOpen from "./app/pages/FirstOpen";
import Login from "./app/pages/Login";
import SignUp from "./app/pages/SignUp";
import signUpform from './app/pages/Signupform';
import Adress from "./app/pages/Adress";
import LogScreen from "./app/pages/screen/LogScreen";
import HomeScreen from "./app/pages/screen/HomeScreen";


const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return(
      <NavigationContainer>
        <Stack.Navigator
        screenOptions={{headerShown: false}}>
            <Stack.Screen name="Login" component={LogScreen}/>
            <Stack.Screen name="Home" component={HomeScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
      )
}

const styles = StyleSheet.create({
    text: {
      color: "black",
    }
});

export default App;
