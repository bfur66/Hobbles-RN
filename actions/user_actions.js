import { MapView, Constants, Location, Permissions } from 'expo';

import { SET_INITIAL_USER_LOCATION } from './types';

export const setInitialUserLocation = () => async dispatch => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);

    if (status !== 'granted') {
        this.setState({ errorMessage: 'Permission to access location was denied', }); // change to dispatch an action?
    }

    let location = await Location.getCurrentPositionAsync({});
    const { latitude, longitude } = location.coords;
    
    const region = { 
        longitude: longitude,
        latitude: latitude,
        longitudeDelta: 0.04,
        latitudeDelta: 0.09
    };
    
    dispatch({ type: SET_INITIAL_USER_LOCATION, payload: region });
}
