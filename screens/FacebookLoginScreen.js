import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

class FacebookLoginScreen extends Component {

    componentDidMount() {
        this.props.facebookLogin();
    }

    componentWillReceiveProps(nextProps) {
        this.onAuthComplete(nextProps);
    }

    onAuthComplete(props) {
        if (props.token) {
            this.props.navigation.navigate('map');
        }
    }

    render() {
        return (
            <View />
        );
    }
}

function mapStateToProps({ auth }) {
    return { token: auth.token };
}

export default connect(mapStateToProps, actions)(FacebookLoginScreen);
