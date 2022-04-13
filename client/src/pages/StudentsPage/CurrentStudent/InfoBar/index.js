import React from "react";
import * as styles from './style.module.css';

export const InfoBar =(props)=>{
const {student} = props;
    return(
        <div className = {styles.InfoBar}>
            <div className ={styles.studentInfo}>
                <div className = {styles.studentImg}>
                    <img src = "http://cdn.onlinewebfonts.com/svg/img_325788.png"/>
                </div>
                <div className = {styles.info}>
                    <p>Status</p>
                    <span style ={{color:'#013224'}}>active</span>
                    <p>Name</p>
                    <span>{student.name}</span>
                    <p>Email</p>
                    <span>{student.email}</span>
                    <p>User Name</p>
                    <span>{student.username}</span>
                </div>
            </div>
            <div className = {styles.content}>
                <h2>Student Courses</h2>
                <div className = {styles.studentCourses}>
                    <div>
                        Passed
                    </div>
                    <div>
                        Passed
                    </div>
                    <div>
                        Loading...
                    </div>
                </div>
                <h1>Certificates</h1>
                <div className = {styles.certificate}>
                    <div className = {styles.cert}>
                        <div className = {styles.img}>

                        </div>
                        <div className = {styles.info}>
                            <span>mm/dd/yyy</span>
                            <span>COmplated A level</span>
                        </div>
                    </div>
                    <div className = {styles.cert}>
                        <div className = {styles.img1}>
                           
                        </div>
                        <div className = {styles.info}> 
                            <span>mm/dd/yyy</span>
                            <span>Complated B Level</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}