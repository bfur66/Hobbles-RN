import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MapView } from 'expo';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';

import * as actions from '../actions';

class MapScreen extends Component {

    render() {
        return (
            <View>
                <Text>MapScreen</Text>
                <Text>MapScreen</Text>
                <Text>MapScreen</Text>
                <Text>MapScreen</Text>
                <Text>MapScreen</Text>
            </View>
        );
    }
}

export default MapScreen;
