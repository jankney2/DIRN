import React, { Component } from "react";
import { Text, View, StyleSheet, Alert } from "react-native";
import { Button } from "react-native-elements";
import axios from "axios";
import {connect} from 'react-redux'


 class HomePage extends Component {
  state = {
    latitude: "",
    longitude: "",
    user:{}
  };

  componentDidMount() {
    // axios.get("https://dropin.business/api/userSession").then(res => {
    //   this.setState({
    //     user: res.data.user
    //   });

    // });
Alert.alert(this.props.activeUser)

  }

  render() {
    return (
      <View style={styles.hello}>
        <Text style={styles.header}
        
        >Begin location tracking</Text>
        <Text>{`Coords:${this.state.latitude} ${this.state.longitude}`}</Text>
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

              axios.post(`https://dropin.business/api/test/${this.state.user.user_id}`, {
                userLat:this.state.latitude, 
                userLong:this.state.longitude
              })
              },
              err => {
                Alert.alert(err);
              }
            );
          }}
        />


        <Button
          title="view properties"
          onPress={() => {
            this.props.navigation.navigate("properties");
          }}
        />

        <Text>active id{this.props.activeUser.user_id}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  hello: {
    // height:,
    // width:350,
    borderWidth: 4,
    borderColor: "red",
    padding: 10,
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
  },
  header: {
    fontSize: 24,
    textAlign: "center"
  },
  button: {
    width: 200
  }
});

const mapStateToProps=state=>{
  return {activeUser:state.user}
}
export default connect(mapStateToProps)(HomePage)