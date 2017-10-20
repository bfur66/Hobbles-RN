import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';
import {
    FACEBOOK_LOGIN_SUCCESS,
    FACEBOOK_LOGIN_FAIL
} from './types';

// How to use AsyncStorage
// AsyncStorage.setItem('foo', bar);
// AsyncStorage.getItem('foo');

export const facebookLogin = () => async dispatch => {

    let token = await AsyncStorage.getItem('fb_login_token');
    console.log(token);

    if (token) {
        // Dispatch action saying FB Login is done
        dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
    } else {
        // Start up FB login process
        doFacebookLogin(dispatch);
    }
};

const doFacebookLogin = async dispatch => {
    // Result.type, Result.token
    let { type, token } = await Facebook.logInWithReadPermissionsAsync('1866619180318823', {
        permissions: ['public_profile']
    });

    if (type === 'cancel') {
        return dispatch({ type: FACEBOOK_LOGIN_FAIL });
    }

    // await = don't do proceed until this .setItem has completed - works for async actions
    await AsyncStorage.setItem('fb_login_token', token);
    dispatch({ type: FACEBOOK_LOGIN_SUCCESS, payload: token });
};
