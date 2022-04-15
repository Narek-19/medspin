export const setAudio = (payload) => {
    return {
        type : "SET_BACKGROUND",
        payload
    }
}
// getALLSTUDENTS
export const getStudents =()=>{
    return async (dispatch) => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const jsonData = await response.json();
        dispatch({
            type:"GET_STUDENTS",
            payload:jsonData,
        });
    };
};
// getCurrentStudent
export const getStudent =(index)=>{
    return async (dispatch)=>{
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${index}`);
        const jsonData = await response.json();
        dispatch({
            type:"GET_STUDENT",
            payload:jsonData,
        });
    };
};
//slider
export const getSlider =(slider)=>{
    return (dispatch)=>{
        dispatch({
            type:"getSlider",
            payload:slider
        })
    }
}