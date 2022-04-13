import { combineReducers } from "redux";
import global from './global';
import project from './project';
import homePage from "./home";
import students from './students';

const rootReducer = combineReducers({
    global,
    project,
    students,
    homePage
});
export default rootReducer;