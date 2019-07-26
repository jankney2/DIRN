import React, { Component } from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { Button } from 'react-native-elements';
import axios from 'axios'

export default class Property extends Component {
    state = { 
        tracking:this.props.tracking
     }

trackingToggler=()=>{
    this.setState({
        tracking:!this.state.tracking
    })
}

componentWillUnmount() {
    axios.put
}

    render() {
        return (
            <View style={styles.contain}>
                <Text>{this.props.address}</Text>
                <Button title={this.state.tracking?'tracking':'untracked'} 
                buttonStyle={[this.state.tracking?styles.tracking: styles.untracked, styles.button]}
                onPress={this.trackingToggler}
                />
                
            </View>
        );
    }
}

const styles=StyleSheet.create({
    contain: {
        flex:1, 
        justifyContent:'space-around', 
        alignItems:'center', 
        flexDirection:'row',
        padding:20
    },
    
    tracking:{
        backgroundColor:'green'
    }, 
    untracked:{
        backgroundColor:'red'
    }
})