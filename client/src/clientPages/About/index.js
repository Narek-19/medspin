import React from "react";
import * as styles from './style.module.css';

export const About =()=>{
    return (
      <div className={styles.About}>
        <h1>About Us</h1>
        <p>
          Introducing our newly created MedSpin Academy the company's program
          using the Blended Learning method. The training courses we offer are
          for radiology operators, staff working on MRI equipment. It will also
          be of interest to radiologists and graduate students who They will
          want to deepen their knowledge and skills in the field of technical
          MRI, as well as be aware of international MRI news, scientific
          achievements and experiments.
        </p>
        <p>
          Initially, the teaching topics will focus on improving MRI image
          quality and eliminating artifacts. Courses will be organized by Karen
          Mkhitaryan, applied by the French organization Siemens MRI / Magnetic
          Resonance Imaging Engineer - 12 years with work experience.
        </p>
      </div>
    );
}