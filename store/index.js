import  { createStore, compose, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const store = createStore(
    reducers,
    // {},
    composeWithDevTools(
        applyMiddleware(thunk)
    )
);

export default store;
