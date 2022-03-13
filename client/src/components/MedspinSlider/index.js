import React from "react";
import * as styles from './style.module.css';
import { MedspinButton } from "../MedspinButton";

export const MedspinSLider = ()=> {
    return(
        <div className = {styles.MedspinSLider}>
            <div className = {styles.screen}>
                <div className = {styles.view}>
                
                </div>
                <div className = {styles.about}>
                    <h4>Training About MRI</h4>
                    <p>date:15.04.2022</p>
                    <MedspinButton content = "Read More"/>
                </div>
            </div>
            <div className = {styles.controls}>
                <div className = {styles.next}>
                    <img src = "./assets/images/icons/control.png"/>
                </div>
            </div>
        </div>
    )
}