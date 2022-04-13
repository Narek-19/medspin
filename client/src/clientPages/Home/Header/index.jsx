import React from "react";
import { HeaderBtn } from "./HeaderBtn";
import * as styles from "./style.module.css";


export const Header = () =>{
    return (
        <div className = {styles.Header}>
            <div className = {styles.headerContent}>
                <h1>MRI Trainings For Radiographers</h1>
                <hr/>
                <p>
                The training courses are for radiology operators, staff working on MRI 
                equipment. It will be of interest to radiologists and graduate students.
                They will want to deepen their knowledge and skills in the field of technical MRI, as well as be
                aware of international MRI news, scientific achievements and experiments.
                </p>
                <HeaderBtn/>
            </div>
            <div className = {styles.anyContent}>
                
            </div>
        </div>
    )
}