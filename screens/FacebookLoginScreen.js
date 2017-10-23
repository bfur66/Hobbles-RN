import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class FacebookLoginScreen extends Component {

    componentDidMount() {
        this.props.facebookLogin();
        this.setInitialLocation();
        console.log("<inside FBLogin>");        
    }

    componentWillReceiveProps(nextProps) {
        this.onAuthComplete(nextProps);
    }

    onAuthComplete(props) {
        if (props.token) {
            // console.log('<----- inside onAuthComplete calling setInitialUserLocation')
            // this.props.setInitialUserLocation();
            // console.log('<----- done setInitialUserLocation')
            this.props.navigation.navigate('map');
        }
    }

    setInitialLocation() {
        this.props.setInitialUserLocation();
    }

    render() {
        return (
            <View />
        );
    }
}

function mapStateToProps({ auth, user }) {
    return { token: auth.token, location: user.location };
}

export default connect(mapStateToProps, actions)(FacebookLoginScreen);
