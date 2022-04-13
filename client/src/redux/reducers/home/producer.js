export const setCourseSlider = (state,action)=>{
    const stateClone = {...state};
    console.log(action.payload,"Ssssssssssssss");
    stateClone.sliderCourses = action.payload;
    return stateClone;
}