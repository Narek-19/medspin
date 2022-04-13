import React,{useEffect,useState} from "react";
import { connect } from "react-redux";
import { selectCourseSlider } from "../../redux/selectors"; 
import { getSlideCourses } from "../../redux/actions/Home";
import {Slider} from './Slider';

import * as styles from "./style.module.css";

const CourseSlider =(props)=> {
    const {courseSlider, getCourseSlider} = props;
    const [slider, setSliders] = useState();
    const [currentPage,setCurrentPage] = useState(0);
  console.log(courseSlider,"sssssssss");
    const filterSildes = (slides) => {
        const filteredData = [];
        const data = [];
        for(let i = 0; i < 6; i++){
          if(data.length < 3){
            data.push(slides[i]);
          }
          if(data.length === 3){
            filteredData.push([...data]);
            data.splice(0,data.length - 1);
          }
        }
        setSliders(filteredData);
      }

      useEffect(()=>{
        getSlideCourses ();
      }, []);

      const changeNext = () => {
        if(currentPage < 1){
          setCurrentPage(currentPage + 1);
        }
        if(currentPage === 1){
          setCurrentPage(0);
        }
      }
      const changePrev = () => {
        if(currentPage === 0){
          setCurrentPage(1);
        }
        if(currentPage === 1){
          setCurrentPage(0);
        }
      }

    return(
        <div className = {styles.CourseSlider}>
            <Slider page = {currentPage} slider = {slider}/>
            <div className = {styles.Controls}>
                <div onClick = {changeNext}>Prev</div>
                <div onClick = {changePrev}>Next</div>
        </div>
        </div>
    )
}
const mapStateToProps =(state)=> ({
  courseSlider:selectCourseSlider(state)
})
export default connect(mapStateToProps,{getSlideCourses })(CourseSlider) 