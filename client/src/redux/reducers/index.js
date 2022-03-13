import { combineReducers } from "redux";
import global from './global';
import project from './project';

const rootReducer = combineReducers({
    global,
    project
});
export default rootReducer;