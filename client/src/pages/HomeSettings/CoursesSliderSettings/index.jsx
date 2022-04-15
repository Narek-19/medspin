import React from 'react'
import SearchCourse from './SearchCourse';
import SliderCoursesBar from './SliderCoursesBar'
import * as styles from "./style.module.css";

const CoursesSliderSettings =(props)=> {

    return (
        <div className = {styles.CoursesSliderSettings}>
            <h2>{props.title} Part</h2>
            <SearchCourse title = {props.title}/>
            <SliderCoursesBar title = {props.title}/>
        </div>
    )
}
export default CoursesSliderSettings;