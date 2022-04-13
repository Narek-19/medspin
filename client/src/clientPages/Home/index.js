import React from 'react'
import { Header } from './Header';
import {Footer} from './Footer';
import * as styles from './style.module.css';
import  CourseSlider  from '../../components/CourseSlider';

export const Home = () =>{
    return (
        <div>
            <Header/>
            <div className ={styles.Home}>
                <CourseSlider/>
            </div>
            <Footer/>
        </div>
    )
}