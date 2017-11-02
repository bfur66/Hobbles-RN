import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';
import Expo from 'expo';

import store from './store';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import SettingsScreen from './screens/SettingsScreen';
import ReviewScreen from './screens/ReviewScreen';
import FacebookLoginScreen from './screens/FacebookLoginScreen';
import MobileLoginScreen from './screens/MobileLoginScreen';
import CreateHobbleScreen from './screens/CreateHobbleScreen';

export default class App extends React.Component {

  // figure out where to put the CreateHobbleScreen navigation options in this mess 
  
  render() {
    const MainNavigator = TabNavigator(
      {
        welcome: { screen: WelcomeScreen },
        auth: { screen: AuthScreen },
        facebookLogin: { screen: FacebookLoginScreen },
        mobileLogin: { screen: MobileLoginScreen },
        main: {
          screen: TabNavigator(
            {
              map: { screen: MapScreen },
              hobbles: { screen: DeckScreen },
              create: { 
                screen: StackNavigator(
                  {
                    create: { screen: CreateHobbleScreen }
                  }
                )
              },
              review: {
                screen: StackNavigator(
                  {
                    review: { screen: ReviewScreen },
                    settings: { screen: SettingsScreen }
                  }
                )
              }
            },
            {
              tabBarPosition: 'bottom',
              lazy: true,
              navigationOptions: {
                tabBarVisible: true
              },

              tabBarOptions: {
                activeTintColor: 'white',
                labelStyle: { fontSize: 12 },
                style: {
                  backgroundColor: '#158fc6'
                }
              }
            }
          )
        }
      },
      {
        navigationOptions: {
          tabBarVisible: false
        },
        swipeEnabled: false,
        lazy: true,
        animationEnabled: false
      }
    );

    return (
      <Provider store={store}>
        <MainNavigator />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
