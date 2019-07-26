import React, { Component } from "react";
import { View, Text, StyleSheet, FlatList, Alert } from "react-native";
import axios from "axios";
import { ListItem } from "react-native-elements";

export default class Properties extends Component {
  state = {
    userProperties: []
  };

  componentDidMount() {
    axios
      .get("https://dropin.business/api/userProperties/14")
      .then(res => {
        this.setState({
          userProperties: res.data
        });
      })
      .catch(err => Alert.alert(err));
  }

  render() {
    return (
      <View style={styles.contain}>
        <Text>Properties</Text>

          <FlatList
            data={this.state.userProperties}
            renderItem={({ item }) => {
              return <Text style={{ textAlign: "center" }}>{item.street}</Text>;
              
                  
            }}
            keyExtractor={item => item.property_id.toString()}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contain: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});
