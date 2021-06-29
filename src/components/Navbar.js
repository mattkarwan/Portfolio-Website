import React, { useState } from 'react';
import MobileDropdown from './MobileDropdown';
import styles from './Navbar.module.scss';
import { scrollTo } from '../SharedFunctions';

export default function Navbar(props) {

    const [navOpen, setNavOpen] = useState(false);    

    // Only toggle nav on logo click if it's already open
    const handleLogoClick = () => {
        navOpen && setNavOpen(false);
    }

    return (
        <div>
            {props.mobile ? (

                <nav className={styles.mobileNav}>
                    <div className={styles.mobileNavItems}>
                        <p id='navLogo' className={`${styles.mobileNavLogo} ${navOpen ? styles.navLogoOpen : undefined}`} onClick={() => {scrollTo('homePage'); handleLogoClick();}}>MK</p>
                        
                        <div id="burgerContainer" className={styles.burgerContainer} onClick={() => setNavOpen((prev => !prev))}>
                            <div id="burger" className={`${styles.burger} ${navOpen ? styles.burger_close : undefined}`}>
                                <div id="topLineContainer" className={`${styles.lineContainer} ${navOpen ? styles.burger_top_close : undefined}`}><span id="topLine" className={navOpen ? styles.burger_topLine_close : undefined} /></div>
                                <div id="botLineContainer" className={`${styles.lineContainer} ${navOpen ? styles.burger_bot_close : undefined}`}><span id="botLine" className={navOpen ? styles.burger_botLine_close : undefined} /></div>
                            </div>
                        </div>
                    </div>

                    <div className={styles.blurredBg} />
                    
                    <MobileDropdown navOpen={navOpen} setNavOpen={setNavOpen} />
                    
                </nav>
            ) : (
                <nav className={styles.desktopNav}>
                    <ul className={styles.desktopNavItems}>
                        <li onClick={() => scrollTo('homePage')}>Home</li>
                        <li onClick={() => scrollTo('workPage')}>Work</li>
                        <li onClick={() => scrollTo('aboutPage')}>About</li>
                        <li onClick={() => scrollTo('testimonialsPage')}>Testimonials</li>
                        <li onClick={() => scrollTo('contactPage')}>Contact</li>
                    </ul>
                </nav>
            )}
        </div>





    )
}
