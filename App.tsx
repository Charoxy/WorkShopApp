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


const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return(
      <NavigationContainer>
        <Stack.Navigator
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="FirstPage" component={FirstOpen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="signUpform" component={signUpform}/>
            <Stack.Screen name="Adress" component={Adress}/>
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
