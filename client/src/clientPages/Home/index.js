import React from 'react'
import { Header } from './Header';
import {Footer} from './Footer';
import * as styles from './style.module.css';
import  CourseSlider  from '../../components/CourseSlider';
import MedspinBlogSlider from '../../components/MedspinBlogSlider';

export const Home = () =>{
    return (
        <div>
            <Header/>
            <div className ={styles.Home}>
                <h2>Courses</h2>
                <CourseSlider/>
                {/* bloglider */}
                <MedspinBlogSlider/>
            </div>
            <Footer/>
        </div>
    )
}