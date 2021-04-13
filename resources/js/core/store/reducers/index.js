import { combineReducers } from "redux";
import listsReducer from './lists';
import tasksReducer from './tasks';
export default combineReducers({ listsReducer, tasksReducer });
