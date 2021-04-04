import { RSAA, getJSON } from "redux-api-middleware";

export const loadLists = () => ({
    [RSAA]: {
        endpoint: '/api/lists',
        method: 'GET',
        types: [
            'LOAD_LISTS_REQUEST',
            {
                type: 'LOAD_LISTS_SUCCESS',
                payload: async (action, state, response) => {
                    const result = await getJSON(response);
                    return { data: result };
                },
            },
            'LOAD_LISTS_FAILURE',
        ]
    }
});

export const addList = (name, pattern_id, predefined, user_id) => ({
    [RSAA]: {
        endpoint: '/api/lists',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, pattern_id, predefined, user_id }),
        types: [
            'ADD_LIST_REQUEST',
            {
                type: 'ADD_LIST_SUCCESS',
                payload: async (action, state, response) => {
                    const result = await getJSON(response);
                    return { data: result };
                },
            },
            'ADD_LIST_FAILURE',
        ]
    }
});
