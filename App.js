import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Login, Painel} from './src/views/index'

export default function App(){
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Screen name='login' component={Login}/>
      <Stack.Screen name='painel' component={Painel}/>
    </NavigationContainer>
  )
};

