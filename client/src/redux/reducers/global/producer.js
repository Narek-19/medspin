export const setBackground = (state,action)=>{
    const stateClone = {...state};
    stateClone.background1 = action.payload;
    return stateClone;
}