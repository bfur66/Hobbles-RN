import { SET_INITIAL_USER_LOCATION } from './types';

export const setInitialUserLocation = (dispatch) => {

    var coords;

    dispatch({ type: SET_INITIAL_USER_LOCATION, payload: coords });
}