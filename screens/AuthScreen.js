import React, { Component } from 'react';
import { View, Text, AsyncStorage, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';

const SCREEN_WIDTH = Dimensions.get('window').width;

class AuthScreen extends Component {

    static navigationOptions = () => ({
        
    });

    onFacebookButtonPress = () => {
        this.props.navigation.navigate('facebookLogin');
    }

    onMobileButtonPress = () => {
        this.props.navigation.navigate('mobileLogin');
    }

    render() {
        const { containerStyle, buttonStyle } = styles;
        return (
            <View style={containerStyle}>
                <View>
                    <Button
                        title="Login with Facebook"
                        buttonStyle={buttonStyle}
                        onPress={this.onFacebookButtonPress}
                    />
                    <Button
                        title="Login with Mobile Phone"
                        onPress={this.onMobileButtonPress}
                    />
                </View>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH,
        backgroundColor: '#03A9F4'
    },

    buttonStyle: {
        backgroundColor: '#0288D1',
        marginBottom: 15
    }
}

export default AuthScreen;
