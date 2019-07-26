import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from './Components/Login';
import HomePage from './Components/HomePage'



const App = createStackNavigator({
  
    login: Login,
    homepage:HomePage
  
},
{
initialRouteName:'login'
});

export default createAppContainer(App)