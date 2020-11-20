import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, StyleSheet, Button, TouchableOpacity,Navigation,NavigatorIOS, } from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
import StartScreen from './components/StartScreen';
import Gamescreen from './components/GameScreen';


export default function App({navigation}){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={StartScreen} />
        <Stack.Screen name="Tic Tac Toe" component={Gamescreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}



