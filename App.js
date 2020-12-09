import React from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Navigator from './Navigator';
import login from './src/Pages/login';
import cadastro from './src/Pages/cadastro';
import Pedidos from './src/Pages/Pedidos';
import Registro from './src/Pages/Registro';
import Administrativo from './src/Pages/Administrativo';
;

const AppNavigator = createSwitchNavigator({
  Administrativo,
  cadastro: cadastro,
  login: login,
  Navigator: Navigator, 
  Pedidos: Pedidos, 
  Registro: Registro,
 
 
},
  {
    initialRouteName: 'login'
  }
)

export default createAppContainer(AppNavigator);