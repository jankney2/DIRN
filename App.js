import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from './Components/Login';
import HomePage from './Components/HomePage'
import Properties from './Components/Properties';



const App = createStackNavigator({
  
    login: Login,
    homepage:HomePage, 
    properties:Properties
  
},
{
initialRouteName:'properties'
});

export default createAppContainer(App)