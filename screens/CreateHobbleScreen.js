import React, { Component } from 'react';
import { View, Text, Platform } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import { Card, CardSection, Spinner } from '../components/common/';

// TODO 
// add spinner when waiting for response from firebase

class CreateHobbleScreen extends Component {

    state = { name: '', email: '', phone: '' };

    static navigationOptions = ({ navigation }) => ({
        title: 'Create Hobble',
        headerStyle: {
            marginTop: Platform.OS === 'android' ? Expo.Constants.statusBarHeight : undefined,
            backgroundColor: '#158fc6'
        },
        headerTintColor: 'white'
    });

    render() {
        return (
            <View style={styles.containerStyle}>
                <Card style={{ backgroundColor: '#03A9F4' }}>
                    <CardSection style={{ backgroundColor: '#03A9F4' }}>
                        <FormLabel>Enter name</FormLabel>
                        <FormInput
                            underlineColorAndroid='transparent'
                            value={this.state.name}
                            onChangeText={name => this.setState({ name })}

                        />
                    </CardSection>

                    <CardSection style={{ backgroundColor: '#03A9F4' }}>
                        <FormLabel>Enter email address</FormLabel>
                        <FormInput
                            underlineColorAndroid='transparent'
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                        />
                    </CardSection>

                    <CardSection style={{ backgroundColor: '#03A9F4' }}>
                        <FormLabel>Enter phone number</FormLabel>
                        <FormInput 
                            underlineColorAndroid='transparent'
                            value={this.state.phone}
                            onChangeText={phone => this.setState({ phone })}
                        />
                    </CardSection>

                    <CardSection style={{ backgroundColor: '#03A9F4' }}>
                        <Button 
                            backgroundColor='#158fc6'
                            title="Submit"
                            onPress={console.log('button pressed!')}
                        />
                    </CardSection>
                </Card>
            </View>
        );
    }
}

const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#03A9F4'
    },
    textStyle: {
        color: 'yellow'
    },
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default CreateHobbleScreen;
