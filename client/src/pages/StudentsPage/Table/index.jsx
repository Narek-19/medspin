import React from "react";
import * as styles from './style.module.css';
import {Link} from 'react-router-dom'

export const Table =(props)=>{
    const {students} = props;
    console.log(students);
    return(
        <div className ={styles.table}>
            {
                students.map((el)=>{
                    return(
                        <div className = {styles.row} key = {el.id}>
                            <div className = {styles.column}>
                                <span className = {styles.id}>{el.id}</span>
                                <span className = {styles.name}>Name</span>
                                <span className = {styles.data_name}>{el.name}</span>
                                <span className = {styles.username}>User Name</span>
                                <span className = {styles.data_username}>{el.username}</span>
                                <span className = {styles.email}>Email</span>
                                <span className = {styles.data_email}>{el.email}</span>
                                <span className = {styles.edit}>
                                <Link to={`/student/${el.id}`}>Edit</Link>
                                </span>
                            </div>
                        </div>
                    )
                })
            } 
        </div>
    )
}