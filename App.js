import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";
import Login from './Components/Login';
import HomePage from './Components/HomePage'
import Properties from './Components/Properties';
import {Provider} from 'react-redux'
import store from './redux/store'

const App =createStackNavigator({
  
    login: Login,
    homepage:HomePage, 
    properties:Properties
  
},
{
initialRouteName:'login'
});

export default createAppContainer(
    <Provider store={store}>
        {App}

    </Provider>
    )