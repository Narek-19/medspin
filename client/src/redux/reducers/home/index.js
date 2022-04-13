import { setCourseSlider} from "./producer";

const initialState = {
    sliderCourses:null,
}
const homePage = (state = initialState, action)=>{
    console.log(action.type,"actiontype");
    switch(action.type){
        case "GET_SLIDE_COURSES":
            return setCourseSlider(state, action);
        default:
            return state;
    }
}
export default homePage;