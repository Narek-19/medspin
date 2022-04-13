// getSlides
export const getSlideCourses = () =>{
    return async (dispatch) => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1/albums");
        const jsonData = await response.json();
        dispatch({
            type:"GET_SLIDE_COURSES",
            payload: jsonData,
        })
    }
}
