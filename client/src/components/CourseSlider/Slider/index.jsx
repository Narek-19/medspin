import React from "react";
import * as styles from "./style.module.css"

export const Slider =(props)=>{
    const {slider,page} = props;
    return (
        <div className = {styles.Slider}>
            {slider !== undefined && slider[page].map((slide,key)=>{
                return (
                  <div key={key} className={styles.slide}>
                    <div className={styles.sliderImg}>
                      <img alt= "slider" src="https://storage.googleapis.com/dexatel_dashboard/blog/36/cover/delivery-report-for-text-messages.jpg"></img>
                    </div>
                    <div className={styles.content}>
                      <p>{slide.title}</p>
                    </div>
                  </div>
                );
            })}
        </div>
    )
}

