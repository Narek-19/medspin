import { getStudent } from './producer.js';
import {getStudents} from './producer.js';
const initialState = {
    students:[],
    student:null
}
const students = (state = initialState, action)=>{
    switch(action.type){
        case "GET_STUDENTS":
            return getStudents(state,action);
        case "GET_STUDENT":
            return getStudent(state,action);
        default:
            return state;
    }
}
export default students;