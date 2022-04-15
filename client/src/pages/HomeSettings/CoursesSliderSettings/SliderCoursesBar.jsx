import { connect } from "react-redux";
import React from "react";
import {getSlider} from "../../../redux/actions";
import * as styles from './style.module.css';

const SliderCoursesBar =(props)=>{
    
    const arraySlide = [
        {title:"Title1",img:"https://klass.novaclearning.com/theme/images/default.jpg",des:"message1"},
        {title:"Title2",img:"https://klass.novaclearning.com/theme/images/default.jpg",des:"message2"},
        {title:"Title3",img:"https://klass.novaclearning.com/theme/images/default.jpg",des:"message3"}
    ]

    const handleChange =()=>{
        props.getSlider(arraySlide);
    }

    return(
        <div className = {styles.SliderCoursesBar}>
            <button onClick = {handleChange}>
                Click
            </button>
        </div>
    )
}
export default connect(null,getSlider)(SliderCoursesBar);