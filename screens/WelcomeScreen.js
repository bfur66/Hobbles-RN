import _ from 'lodash';
import React, { Component } from 'react';
import { View, Text, AsyncStorage } from 'react-native';
import { AppLoading } from 'expo';
import Slides from '../components/Slides';

const SLIDE_DATA = [
    { text: 'Welcome to Hobbles', color: '#03A9F4' },
    { text: 'If you are looking for work set your location, then swipe away!', color: '#03A9F4' },
    { text: 'If you are looking for someone to complete work, select a location and post a Hobble!', color: '#03A9F4' }
];

class WelcomeScreen extends Component {


    onSlidesComplete = () => {
        this.props.navigation.navigate('auth');
    }

    render() {
        return (
            <Slides 
                data={SLIDE_DATA}
                onComplete={this.onSlidesComplete}
            />
        );
    }
}

export default WelcomeScreen;
