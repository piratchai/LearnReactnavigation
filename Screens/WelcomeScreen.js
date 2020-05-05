import React, { Component } from 'react';
//import { View, Text, Button } from 'react-native';
import { View } from 'react-native';
import { Text, Button } from 'galio-framework';

export default class WelcomeScreen extends Component {
    render(){
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#2C3E50' }}>
                <Text style={{fontSize: 20, marginBottom: 20, color: 'white'}}>Details Screen</Text>
                <Button
                onPress={() => this.props.navigation.goBack()}
                style={{
                    width: 120,
                    height: 50
                }}
                >Go to Home</Button>
            </View>
        );
    }
}