import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  Keyboard
} from "react-native";
import { Button, Input } from "react-native-elements";
import Icon from "react-native-vector-icons/EvilIcons";

export default class Login extends Component {
  state = {
  phoneVal: "",
    passVal: "",
    location:''
  };

  componentDidMount() {
   this.setState({
     location:navigator.geolocation
     
  }) 
  }

  changeHandler= (text)=>{
    this.setState({
      [text.name]:text
    })
  }

  loginHandler=()=>{
    //axios request


    this.setState({
      phoneVal:'',
      passVal:''
    })
Keyboard.dismiss()

  }
  render() {
    return (
      <KeyboardAvoidingView behavior="padding">
        <View style={styles.logincont}>
          <Text style={styles.header}>DropIn</Text>
          <Text>{this.state.location.geolocation}</Text>
          
          <TextInput
          name='phoneVal'
            keyboardType="number-pad"
            style={styles.inputs}
            placeholder="Phone"
            value={this.state.phoneVal}
            onChangeText={text => {
              this.setState({
                phoneVal: text
              });
            }}
          />

          <TextInput
          name='passVal'
          value={this.state.passVal}
            style={styles.inputs}
            secureTextEntry={true}
            placeholder="Password"
            onChangeText={text => {
              this.setState({
                passVal: text
              });
            }}
          />

          <Button
            title="login"
            buttonStyle={styles.buttonStyle}
            icon={<Icon name="pointer" size={50} color="whitesmoke" />}
            iconRight
            onPress={this.loginHandler}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  inputs: {
    fontSize: 24,
    textAlign: "left",
    backgroundColor: "white",
    padding: 15,
    width: 250,
    margin: 10,
    borderRadius: 30, 
    zIndex:2
  },
  header:{
    fontSize:36,
    textAlign:"center", 
    marginBottom:50
  },
  logincont: {
    borderColor:'rgba(200, 210, 255, .5)',
    borderWidth:2, 
    paddingTop:100,
    paddingBottom:100,
    paddingLeft:30,
    paddingRight:30,

  }, 
  buttonStyle:{
    marginTop:50
  }
});
