import React from "react";
import { CreatePage } from "../../../pages/CreatePage";
import * as styles from './style.module.css';

export const AdminDashboard =()=>{
    return(
        <div className = {styles.AdminDashboard}>
            <div className = {styles.Dashboard}>
                settings
            </div>
            <div className = {styles.Content}>
                <h1>Cntent</h1>
            </div>
        </div>
    )
}