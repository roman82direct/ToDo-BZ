import update from 'react-addons-update';

const storeLists = {
    lists: [
        {
            created_at: "2021-03-29T20:12:10.000000Z",
            id: 7,
            name: "Финансы",
            pattern_id: 9,
            predefined: null,
            updated_at: "2021-03-29T20:12:10.000000Z",
            user_id: 1,
        },
        {
            created_at: "2021-03-29T20:12:10.000000Z",
            id: 8,
            name: "Спорт",
            pattern_id: 5,
            predefined: null,
            updated_at: "2021-03-29T20:12:10.000000Z",
            user_id: 1,
        },
    ],
};

export default (store = storeLists, action) => {
    switch (action.type) {
        case 'ADD_LIST': {
            return update(store, {
                lists: { $push: [action.paramList] }
            });
        }
        case 'LOAD_LISTS': {
            return store;
        }
        default: {
            return store;
        }
    }
};
