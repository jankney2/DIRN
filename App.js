import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Info from './Components/Info'
import Login from './Components/Login';


function App() {
  return (
 <AppNavigator/>
  );
}

const AppNavigator = createStackNavigator({
  
    login: Login,
    info:Info
  
});

export default createAppContainer(AppNavigator)