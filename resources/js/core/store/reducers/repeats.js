import update from 'react-addons-update';

const storeRepeats = {
    repeats: [],
};

export default (store = storeRepeats, action) => {
    switch (action.type) {
       
        case 'LOAD_REPEATS_SUCCESS': {
            return update(store, {
                repeats: { $set: action.payload.data }
            });
        }
        
        default: {
            return store;
        }
    }
};