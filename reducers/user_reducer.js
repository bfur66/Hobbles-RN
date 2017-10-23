import { 
    SET_INITIAL_USER_LOCATION
} from '../actions/types';


export default function(state = {}, action) {
    switch(action.type) {
        case SET_INITIAL_USER_LOCATION:
            return { location: action.payload };
        default:
            return state;
    }
}
