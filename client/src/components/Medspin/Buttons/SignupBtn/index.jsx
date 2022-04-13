import React from "react";

export const SignupBtn=()=>{
    const styles = {
        cursor:"pointer",
        backgroundColor:"#0ABF04",
        borderRadius:"15px",
        width:"127px",
        height:"40px",
        border:"none",
        marginRight:"5px",
        color:"white",
    }
    return (
        <button style = {styles}>
            Sign Up
        </button>
    )
}