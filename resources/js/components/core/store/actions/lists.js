export const addList = (created_at, id, name, pattern_id, predefined, updated_at, user_id) => ({
    type: 'ADD_LIST',
    paramList: { created_at, id, name, pattern_id, predefined, updated_at, user_id }
});

export const loadLists = () => ({
    type: 'LOAD_LISTS',
});
