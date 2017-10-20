import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';

class AuthScreen extends Component {

    onButtonPress = () => {
        this.props.navigation.navigate('main');
    }

    render() {
        return (
            <View> 
                <Text>AUTH</Text>
                <Text>AUTH</Text>
                <Text>AUTH</Text>
                <Text>AUTH</Text>
                <Button
                    title="Login"
                    onPress={this.onButtonPress}
                />
            </View>
        );
    }
}

export default AuthScreen;
