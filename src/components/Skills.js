import React from 'react';
import styles from './Skills.module.scss';

export default function Skills(props) {

    let skillList = props.skillList;
    
    let listClass;
    
    if (props.className === 'seo') {
        listClass = styles.seo
    
    }
    
    if (props.className === 'webDesign'){
        listClass = styles.webDesign;
    }
    
    if (props.className === 'webDevelopment') {
        listClass = styles.webDevelopment;
    }

    return (
        <div className={`${props.lastItem && styles.span} ${styles.container}`}>
            <div className={styles.iconAndHeading}>
                <div className={styles.icon}>
                    {props.img}
                </div>
                <h3 className={styles.heading}>{props.title}</h3>
            </div>

            <div className={styles.text}>
                <ul className={listClass}>
                    {skillList.map((skill, i) => <li key={`skill_${i}`}>{skill}</li>)}
                </ul>
            </div>
        </div>
    )
}