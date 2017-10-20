import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { MapView, Constants, Location, Permissions } from 'expo';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';

import * as actions from '../actions';

class MapScreen extends Component {

    state = {
        region: {
            longitude: null,
            latitude: null,
            longitudeDelta: 0.04,
            latitudeDelta: 0.09
        }
    }

    componentWillMount = async () => {
        let { location } = await this.getLocationAsync();
        console.log(location);

        const newState = {
            region: {
                longitude: this.state.location.longitude,
                latitude: this.state.location.latitude,
                longitudeDelta: 0.04,
                latitudeDelta: 0.09
            }
        }
    }

    getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);

        if (status !== 'granted') {
            this.setState({ errorMessage: 'Permission to access location was denied', });
        }

        let location = await Location.getCurrentPositionAsync({});
        this.setState({ location });
    };

    onRegionChangeComplete = (region) => {
        console.log(region);
        this.setState({ region });
    }

    onButtonPress = () => {
        console.log(JSON.stringify(this.state.location));
    }

    render() {
        return (
            <View style={{ flex:1 }}>
                <MapView 
                    region={this.state.region}
                    style={{ flex: 1 }} 
                    onRegionChangeComplete={this.onRegionChangeComplete}
                />
                <View style={styles.buttonContainer}>
                    <Button
                        large
                        title="Set Location"
                        backgroundColor="#03A9F4"
                        icon={{ name: 'room' }}
                        onPress={this.onButtonPress}
                    />
                </View>
                    
            </View>
        );
    }
}

const styles = {
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0
    }
}

export default MapScreen;
