import React from 'react';
import styles from './AboutMePage.module.scss';
import Heading from './Heading';
import Skills from './Skills';
import WebDevelopment from '../assets/WebDev.js';
import WebDesign from '../assets/WebDesign.js';
import Seo from '../assets/Seo.js';

export default function AboutMePage() {
    return (
        <div className={styles.aboutMeContainer} id="aboutPage">
            <div className={styles.aboutMeContent}>
                <Heading  heading="About Me" subHeading="Learn more about me" />

                <div className={styles.introParagraph}>
                    <p>Hey, I'm Matt. I'm a frontend developer from Melbourne.</p>
                    <p>I enjoy the process of facing a coding challenge and working to find the best solution, constantly striving to achieve best practices 
                        and to optimise the code I write to provide the best possible user experience with pixel-perfect precision, helping to bring your 
                        ideas to life.</p>

                    <p>Some of the technologies I like to work with include:</p>
                </div>

                <div className={styles.skillsGrid}>
                    <Skills img={<WebDevelopment />} title='Web Development' skillList={['HTML', 'CSS/Sass', 'JavaScript', 'React', 'WordPress', 'Shopify']} className='webDevelopment' />
                    <Skills img={<WebDesign />} title='Web Design' skillList={['Photoshop', 'Illustrator', 'Adobe XD', 'Figma']} className='webDesign' />
                    <Skills img={<Seo />} title='SEO' skillList={['Google Analytics', 'Screaming Frog', 'Ahrefs']} lastItem={true} className='seo' />
                </div>
            </div>
        </div>
    )
}
