import React from 'react';
import styles from './Testimonial.module.scss';

export default function Testimonial(props) {

    let paragraphs = props.paragraphs;

    return (
        <div className={styles.background}>
            <div className={styles.quotationMarkTop}>"</div>
            <div className={styles.quotationMarkBottom}>"</div>

            <p>
                {paragraphs.map((paragraph, i) => {
                    return <span className={styles.quote} key={i}>{paragraph}</span>
                })}
            </p>

            

            <div className={styles.referrerInfo}>
                <div className={styles.imageContainer}>
                    <div className={styles.image}>
                        <img src={props.img} alt={props.name} width={props.imgWidth} height={props.imgHeight} />
                    </div>
                    <div className={styles.imgBackground} />
                </div>
                
                <p className={styles.name}>{props.name}</p>
                <p>{props.company}</p>
            </div>

            <div className={styles.referrerBackground} />
            
            
        </div>
    )
}
