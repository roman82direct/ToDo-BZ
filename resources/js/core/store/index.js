import { createStore, applyMiddleware, compose } from 'redux';
import initReducers from '@store/reducers';
import middleWares from '@core/middleware';


const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (x) => x;

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
