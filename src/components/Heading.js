import React from 'react'
import styles from './Heading.module.scss';

export default function Title(props) {
    return (
        <div className={styles.headingContainer}>
            <div className={styles.sidebar}></div>
            <div className={styles.textContainer}>
                <h2>{props.heading}</h2>
                <h3>{props.subHeading}</h3>
            </div>
        </div>
    )
}