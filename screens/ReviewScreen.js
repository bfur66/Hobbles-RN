import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { Button } from 'react-native-elements';

class ReviewScreen extends Component {

    static navigationOptions = ({ navigation }) => ({
        title: 'My Hobbles',
        headerRight: (
            <Button
                title="Settings"
                onPress={() => { navigation.navigate('settings') }}
                backgroundColor="rgba(0,0,0,0)"
                color="rgba(0, 122, 255, 1)"
            />
        ),
        headerStyle: {
            marginTop: Platform.OS === 'android' ? Expo.Constants.statusBarHeight : undefined
        }
    });

    render() {
        return (
            <View>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
                <Text>ReviewScreen</Text>
            </View>
        );
    }
}

export default ReviewScreen;
