import { combineReducers } from "redux";
import listsReducer from './lists';
import tasksReducer from './tasks';
import termsReducer from './terms';
import repeatsReducer from './repeats';
export default combineReducers({ listsReducer, tasksReducer, termsReducer, repeatsReducer });
