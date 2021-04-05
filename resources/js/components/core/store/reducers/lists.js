import update from 'react-addons-update';

const storeLists = {
    lists: [],
    predefinedLists: []
};

export default (store = storeLists, action) => {
    switch (action.type) {
        case 'ADD_LIST_SUCCESS': {
            return update(store, {
                lists: { $push: [action.payload.data] }
            });
        }
        case 'LOAD_LISTS_SUCCESS': {
            return update(store, {
                lists: { $set: action.payload.data }
            });
        }
        case 'LOAD_PREDEFINED_LISTS_SUCCESS': {
            return update(store, {
                predefinedLists: { $set: action.payload.data }
            });
        }
        case 'LOAD_LISTS_FAILURE': {
            return update(store, {
                predefinedLists: { $set: action.payload.data }
            });
        }
        default: {
            return store;
        }
    }
};
