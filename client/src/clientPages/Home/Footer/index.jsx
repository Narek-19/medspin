import React from 'react';
import * as styles from './style.module.css';

export const Footer =()=>{
    return (
        <div className = {styles.Footer}>
            <div>
                <span>Help</span>
                <ul>
                    <li>Help Center</li>
                    <li>Privacy</li>
                    <li>Security</li>
                    <li>Terms Of</li>
                    <li>Service</li>
                </ul>
            </div>
            <div>
                <span>Compony</span>
                <ul>
                    <li>About Us</li>
                    <li>Blog</li>
                    <li>Terms Of Use</li>
                    <li>Service</li>
                </ul>
            </div>
            <div>
                <span>Trust</span>
                <ul>
                    <li>Trust</li>
                    <li>Contact</li>
                    <li>Search</li>
                </ul>
            </div>
            <div className = {styles.footerMedia}>
                <input placeholder="Search"/>
                <div className = {styles.media}>
                    <p>Contact With Us</p>
                    <div>
                        <ul>
                            <li>
                                <img src = "./assets/images/icons/youtube.png"/>
                            </li>
                            <li>
                                <img src = "./assets/images/icons/facebook.png"/>
                            </li>
                            <li>
                                <img src = "./assets/images/icons/instagram.png"/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}