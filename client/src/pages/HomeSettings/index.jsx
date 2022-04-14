import React from "react";
import CoursesSliderSettings from './CoursesSliderSettings'
import * as styles from "./style.module.css";

const HomeSettings =()=> {
    return(
        <div className = {styles.HomeSettings}>
            <h1>Home</h1>
            <CoursesSliderSettings title = "Courses"/>
            <CoursesSliderSettings title = "Blog"/>
        </div>
    )
}
export default HomeSettings;