import React, { useState } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import { Entypo, Feather } from '@expo/vector-icons'

import Home from './components/home'
import Criar from './components/create'
import Ler from './components/read'
import Atualizar from './components/update'
import Apagar from './components/delete'
import Login from './components/login'
import NewUser from './components/newUser'
import Register from './components/register'
import Delete from './components/delete'
import Images from './components/images';
import Update from './components/update'
import User from './components/user'
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen
          name='Home'
          component={Home}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name='Login'
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='NewUser'
          component={NewUser}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name='TabBar'
          component={Tabs} //Tabs = Chama toda a TabBar
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name='Register'
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Delete'
          component={Delete}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='Images'
          component={Images}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Create'
          component={Criar}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='User'
          component={User}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='Update'
          component={Update}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='Read'
          component={Ler}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

