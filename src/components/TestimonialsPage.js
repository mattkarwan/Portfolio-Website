import React from 'react';
import Heading from './Heading';
import Testimonial from './Testimonial';
import styles from './TestimonialsPage.module.scss';

import GladysAndJackLogo from '../assets/logos/Gladys-&-Jack.jpg';
import WantirnaOsteoLogo from '../assets/logos/wantirna-osteo.webp';

export default function TestimonialsPage() {
    return (
        <div className={styles.testimonialsContainer} id="testimonialsPage">
            <div className={styles.testimonialsContent}>

                <Heading heading="Testimonials" subHeading="Nice things that nice people have to say" />

                <div className={styles.testimonialsGrid}>
                    <Testimonial 
                        paragraphs={["Matt went beyond expectations and took on all the communication with apps and deep-dived into the problems the site was facing.", 
                            "Not only did he fix all the issues identified but improved the functionality of the website for an enhanced user experience, particularly the fragrances page.",
                            "Matt was such a pleasure to work with; no problem was too big or too small. I am extremely satisfied with the work completed and would highly recommend Matt."]}
                        name="Maree Smith"
                        company="Gladys & Jack"
                        img={GladysAndJackLogo}
                        imgWidth="180"
                        imgHeight="180"
                        color="#3a3a3a"
                    />

                    <Testimonial 
                        paragraphs={["Matt was very flexible, with transparent and honest communication throughout all stages of the project.", 
                            "He was able to find the look I was after, giving the site a modern design and feel while maintaining brand identity.",
                            "Matt also highlighted several opportunities to enhance user experience along the way, resulting in a high-quality final product.",
                            "I am very satisfied with the new website, and would highly recommend working with Matt."]}
                        name="Dr. Jason Stone"
                        company="Wantirna Osteopathy"
                        img={WantirnaOsteoLogo}
                        imgWidth="250"
                        imgHeight="63"
                        color="#1F3C59"
                    />
                </div>

            </div>
        </div>
    )
}
