import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {Login, Painel, Cadastro,FindBook,DeleteBook,CreateBook,UpdateBook} from './src/views/index'

export default function App(){
  const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name='cadastro' component={Cadastro}/>
      <Stack.Screen name='login' component={Login}/>
      <Stack.Screen name='painel' component={Painel}/>
      <Stack.Screen name='findbook' component={FindBook}/>
      <Stack.Screen name='deletebook' component={DeleteBook}/>
      <Stack.Screen name='createbook' component={CreateBook}/>
      <Stack.Screen name='updatebook' component={UpdateBook}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

