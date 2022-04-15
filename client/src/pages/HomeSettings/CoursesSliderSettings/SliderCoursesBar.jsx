import React, { useEffect } from "react";
import { connect } from "react-redux";
import {getSlider} from "../../../redux/actions/";

import * as styles from './style.module.css';

const SliderCoursesBar =(props)=>{
    const {getSlider} = props;
    const arraySlide = [
        {title:"About Mri",img:"https://leverageedu.com/blog/wp-content/uploads/2020/04/Free-Online-Courses-with-Certificates.jpg",des:"Learn About MRI History"},
        {title:"MRI",img:"https://thumb9.shutterstock.com/mosaic_250/177774240/1485832811/stock-vector-internet-education-concept-e-learning-resources-distant-online-courses-vector-line-icon-1485832811.jpg",des:"Learn what is MRI"},
        {title:"Why?",img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoMXixD-C7NQZyh22zfHMNT1m8rNUpidVAeh80u6SiYuVNKBHGfb3gGJN5-sbspOANScY&usqp=CAU",des:"MRI use"},
        {title:"Online classes",img:"https://prod-discovery.edx-cdn.org/media/course/image/0e575a39-da1e-4e33-bb3b-e96cc6ffc58e-8372a9a276c1.png",des:"Online MRI"},
        {title:"Online classes",img:"https://prod-discovery.edx-cdn.org/media/course/image/0e575a39-da1e-4e33-bb3b-e96cc6ffc58e-8372a9a276c1.png",des:"Online MRI"}
    ]


    const handleChange =()=>{
        getSlider(arraySlide);
    }

    return(
        <div className = {styles.SliderCoursesBar}>
            <button onClick = {handleChange}>
                Click
            </button>
        </div>
    )
}
export default connect(null,{getSlider})(SliderCoursesBar);