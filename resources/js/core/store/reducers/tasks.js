import update from 'react-addons-update';

const storeTasks = {
    tasks: [],
    
    activeList: null

};

export default (store = storeTasks, action) => {
    switch (action.type) {
        case 'ADD_TASK_SUCCESS': {
            return update(store, {
                tasks: { $push: [action.payload.data] }
            });
        }
        case 'LOAD_TASKS_SUCCESS': {
            return update(store, {
                tasks: { $set: action.payload.data }
            });
        }
        
        default: {
            return store;
        }
    }
};