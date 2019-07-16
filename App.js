import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Components/Login';
export default function App() {
  return (
    <View style={styles.container}>

      <Login/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 210, 255, 1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
