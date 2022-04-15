import React from 'react'
import SearchCourse from './SearchCourse';
import SliderCoursesBar from './SliderCoursesBar'
import * as styles from "./style.module.css";

const CoursesSliderSettings =(props)=> {

    return (
        <div className = {styles.CoursesSliderSettings}>
            <h2>Courses Slider</h2>
            <SearchCourse />
            <SliderCoursesBar />
        </div>
    )
}
export default CoursesSliderSettings;