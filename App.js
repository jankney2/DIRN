import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Info from './Components/Info'
import Login from './Components/Login';



const App = createStackNavigator({
  
    login: Login,
    info:Info
  
},
{
initialRouteName:'login'
});

export default createAppContainer(App)