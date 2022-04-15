import React from "react";
import * as styles from "./style.module.css"

export const Slider =(props)=>{
    const {slider,page} = props;
    console.log(slider);
    return (
        <div className = {styles.Slider}>
            {slider !== undefined && slider[page].map((slide,key)=>{
                return (
                  <div key={key} className={styles.slide}>
                    <div className={styles.sliderImg}>
                      <img alt= {slide.title} src={slide.img}></img>
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

