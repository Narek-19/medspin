import React from "react";
import {Link} from 'react-router-dom';
import * as styles from './style.module.css'; 
import { Button } from '@material-ui/core';

export const ClientNavbar = () => {
    return (
      <div className={styles.Nav}>
        <div>
          <img src="./assets/images/logo.png" />
        </div>
        <div className={styles.menuBox}>
          <div className={styles.menuTitle}>
            <ul>
              <li>
                <Link to="/">
                  <Button variant="text">Home</Button>
                </Link>
              </li>
              <li>
                <Link to="/contact">
                  <Button variant="text">Contact</Button>
                </Link>
              </li>
              <li>
                <Link to="/courses">
                  <Button variant="text">Courses</Button>
                </Link>
              </li>
              <li>
                <Link to="/about">
                  <Button variant="text">About</Button>
                </Link>
              </li>
              <li>
                <Link to="/login">
                  <Button variant="text">Login</Button>
                </Link>
              </li>
            </ul>
          </div>
          <div className={styles.mediaInfo}>
            <ul>
              <li>
                  <Button variant="outlined">Facebook</Button>
              </li>
              <li>
              <Button variant="outlined" color="success"> Gmail</Button>
              </li>
              <li>
              <Button variant="outlined">Linkdin</Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
}