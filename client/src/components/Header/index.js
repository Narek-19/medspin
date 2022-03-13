import React from "react";
import * as styles from "./style.module.css";
import { MedspinSLider } from "../MedspinSlider";

export const Header =()=>{
    return(
        <div className = {styles.Header}>
            <div className = {styles.headerContent}>
                <div className = {styles.content}>
                    <h2>
                        MRI Trainings for Radiographers
                    </h2>
                </div>
            </div>
            <div className = {styles.headerCard}>
                <MedspinSLider/>
            </div >
        </div>
    )
}