export const setBackground = (state,action)=>{
    const stateClone = {...state};
    stateClone.background1 = action.payload;
    return stateClone;
}
export const setSlider = (state,action) =>{
    const stateClone = {...state};
    stateClone.homeSlider = action.payload;
    return stateClone;
}