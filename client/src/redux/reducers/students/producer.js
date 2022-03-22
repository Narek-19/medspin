// all students
export const getStudents=(state,action)=> {
    const stateClone = {...state};
    stateClone.students = action.payload;
    return stateClone;
}
// currentStudent
export const getStudent =(state,action)=>{
    const stateClone = {...state};
    stateClone.student = action.payload;
    return stateClone;
}