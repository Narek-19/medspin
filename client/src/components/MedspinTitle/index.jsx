import React from "react";
import * as styles from './style.module.css';

export const MedspinTitle =(props)=>{
    return (
        <div className = {styles.MedspinTitle}>
            <h1>{props.title}</h1>
        </div>
    )
}