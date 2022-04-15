import { setBackground } from "./producer";
import {setSlider} from "./producer";

const initialState = {
    background1:"red",
    homeSlider:null,
}
const global = (state = initialState, action)=>{
    switch(action.type){
        case "SET_BACKGROUND":
            return setBackground(state,action);
        case "getSlider":
            return setSlider(state,action);
        default:
            return state;
    }
}
export default global;