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


const Stack = createNativeStackNavigator();

function App(): JSX.Element {
  return(
      <NavigationContainer>
        <Stack.Navigator
            screenOptions={{
              headerShown: false
            }}>
          <Stack.Screen name="FirstPage" component={FirstOpen} />
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