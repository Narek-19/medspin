import React from "react";
import {Link} from 'react-router-dom';
import * as styles from './style.module.css'; 
import { SignupBtn } from "../components/Medspin/Buttons/SignupBtn";

export const ClientNavbar = () => {
    return (
      <div className={styles.Nav}>
        <div className={styles.box1}>
          <div className={styles.logo}>
            <h1>
              <p id={styles.medspin}>Medspin</p>
              <p id={styles.academy}>Academy</p>
            </h1>
          </div>
          <div className={styles.search}>
            <input id={styles.search} placeholder="Search..." />
          </div>
        </div>
        <div className={styles.box2}>
          <div className={styles.menuTitle}>
            <ul>
              <li>
                <Link to="/">
                  <span variant="text">Home</span>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <span variant="text">Contact</span>
                </Link>
              </li>
              <li>
                <Link to="/courses">
                  <span variant="text">Courses</span>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <span variant="text">About</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.admin}>
            <ul>
              <li>
                <SignupBtn>
                  <span variant="text">Sign Up</span>
                </SignupBtn>
              </li>
              <li id = "login">
                <Link to="/login">
                  <span variant="text">Login</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}