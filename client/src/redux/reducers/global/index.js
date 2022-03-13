import { setBackground } from "./producer";

const initialState = {
    background1:"red",
}
const global = (state = initialState, action)=>{
    switch(action.type){
        case "SET_BACKGROUND":
            return setBackground(state,action);
        default:
            return state;
    }
}
export default global;