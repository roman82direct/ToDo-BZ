import { createStore, applyMiddleware, compose } from 'redux';
import initReducers from './reducers';
import middleWares from '../middleware';


const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : () => {};

export default function ourStore() {
    const initStore = {};

    return createStore(
        initReducers,
        initStore,
        compose(
            applyMiddleware(...middleWares),
            reduxDevTools,
        ),
    );
}
