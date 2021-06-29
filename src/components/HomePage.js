import React from 'react';
import Avatar from './Avatar';
import styles from './HomePage.module.scss';
import { scrollTo } from '../SharedFunctions';

export default function HomePage() { 
    
    return (
        <div className={styles.homePage} id="homePage">
            <div className={styles.homePageGrid}>
                <div className={styles.titleContainer}>
                    <h1>Matt Karwan</h1>
                    <h2 className={styles.subtitle}>Frontend Web Developer</h2>
                </div>
                <Avatar />

                <button className={styles.button} onClick={() => scrollTo('workPage')}>View My Work</button>
            </div>
        </div>
    )
}
