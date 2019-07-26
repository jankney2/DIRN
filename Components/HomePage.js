import React, { Component } from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native'
import {Button} from 'react-native-elements'


export default class HomePage extends Component {
    state = {
        latitude:'',
        longitude:''
      }
    render() {
        return (
            <View style={styles.hello}>
         <Text style={styles.header}>Allow the Russians to track your location</Text>
          <Button
          buttonStyle={styles.button}
            title="click for location"
            onPress={() => {

              navigator.geolocation.getCurrentPosition(
                position => {
                  this.setState({

                    latitude: position.coords.latitude, 
                    longitude: position.coords.longitude
                  });
                },
                err => {
                  Alert.alert(err);
                }
              );
            }}
          />


            </View>
        );
    }
}


const styles=StyleSheet.create({
    hello: {
        // height:,
        // width:350, 
        borderWidth:4, 
        borderColor:'red', 
        padding: 10,
        flex:1, 
        justifyContent:'space-around',
        alignItems:'center'

    }, 
    header: {
        fontSize:24,
textAlign:'center'
    }, 
    button: {
        width: 200,

    }
})