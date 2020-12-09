import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Cantina from './src/Pages/Cantina';
import Home from './src/Pages/Home';
import Boletim from './src/Pages/Boletim';
import Administrativo from './src/Pages/Administrativo';
import Solidariedade from './src/Pages/Solidariedade';
import cadastro from './src/Pages/cadastro';
import login from './src/Pages/login';
import Videos from './src/Pages/Videos';
import Registro from './src/Pages/Registro';
import SideBar from './components/SideBar';

const DrawerNavigator = createDrawerNavigator(
  {
    Home,
    Boletim,    
    Cantina,    
    Solidariedade,
    Videos,
    },
  {
    contentComponent: (props) => <SideBar {...props} />
  });

const Stack = createStackNavigator();

function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="login" component={login} />
        <Stack.Screen name="cadastro" component={cadastro} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Registro" component={Registro} />
        <Stack.Screen name="Administrativo" component={Administrativo} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}


export default createAppContainer(DrawerNavigator, Navigate);