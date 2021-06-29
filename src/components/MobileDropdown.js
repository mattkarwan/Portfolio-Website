import React from 'react';
import styles from './MobileDropdown.module.scss';
import { scrollTo } from '../SharedFunctions';

export default function MobileDropdown(props) {

    function navItemClick (target) {
        scrollTo(target);
        props.setNavOpen((prev) => !prev);
    }

    return (
        <div className={`${styles.dropdown} ${props.navOpen && styles.dropdownOpen}`}>
            <ul className={styles.links}>
                <li onClick={() => navItemClick('homePage')}>Home</li>
                <li onClick={() => navItemClick('workPage')}>My Work</li>
                <li onClick={() => navItemClick('aboutPage')}>About Me</li>
                <li onClick={() => navItemClick('testimonialsPage')}>Testimonials</li>
                <li onClick={() => navItemClick('contactPage')}>Contact</li>
            </ul>

            <div className={styles.footer}>
                <a href="mailto: mattkarwan.developer@gmail.com">mattkarwan.developer@gmail.com</a>
            </div>
        </div>
    )
}