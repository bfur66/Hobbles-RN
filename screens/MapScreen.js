import React, { Component } from 'react';
import { View, Text, ToastAndroid, Platform } from 'react-native';
import { MapView, Constants, Location, Permissions } from 'expo';
import { connect } from 'react-redux';
import { Button } from 'react-native-elements';

import * as actions from '../actions';


/*
    ------- TODO -------
    - there are (potentially) issues with this component lifecycle
      as there are a few unexplained renders showing up in the 
      logs. Will look into this
      
    - add a slider by the button to allow the user to specify the 
      radius in which they wish to show hobbles in 
      
*/
class MapScreen extends Component {

    constructor(props) {
        super(props);
    }

    state = {
        region: {}
    }

    onRegionChangeComplete = (region) => {
        this.setState({ region });
    }

    onButtonPress = () => {        
        // this will eventually fire off a redux action to save the current
        // position in application state to be used again in the deck view
        // where the user will swipe through all nearby hobbles
        if (Platform.OS === 'android') {
            ToastAndroid.show('Location set! Browse the Hobbles section for a job that interests you or post a Hobble you are looking to have completed!',
                ToastAndroid.LONG);    
        }

        console.log(this.state.region);
    }

    render() {
        return (
            <View style={{ flex:1 }}>
                <MapView 
                    initialRegion={this.props.location}
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
        bottom: 30,
        left: 0,
        right: 0
    }
}

function mapStateToProps({ user }) {
    return { location: user.location }
}

export default connect(mapStateToProps, actions)(MapScreen);
