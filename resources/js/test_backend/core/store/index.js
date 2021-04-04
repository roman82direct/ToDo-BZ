import { createStore } from 'redux';
import initReducers from './reducers';

export default function ourStore() {
    const initStore = {};

    return createStore(
        initReducers,
        initStore,
    );
}
