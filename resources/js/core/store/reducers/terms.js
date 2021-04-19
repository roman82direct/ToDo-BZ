import update from 'react-addons-update';

const storeTerms = {
    terms: [],
};

export default (store = storeTerms, action) => {
    switch (action.type) {
        
        case 'LOAD_TERMS_SUCCESS': {
            return update(store, {
                terms: { $set: action.payload.data }
            });
        }
        
        default: {
            return store;
        }
    }
};