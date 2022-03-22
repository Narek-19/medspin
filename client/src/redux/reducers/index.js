import { combineReducers } from "redux";
import global from './global';
import project from './project';
import students from './students';

const rootReducer = combineReducers({
    global,
    project,
    students
});
export default rootReducer;