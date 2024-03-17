import {  Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SplashScreen} from './component';
import {Login,Verify} from './Auth';
const Stack = createStackNavigator();

const index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'SplashScreen'}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Verify" component={Verify} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default index
