import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../navbar/Header.jsx'
import styles from './About.module.scss'
import styles_mobile from './About_mobile.module.scss'
import AnimatedPage from '../Animation.jsx';
import { useMediaQuery } from 'react-responsive'

const About = () => {
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'})
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    return <div>

        {isDesktopOrLaptop && 
        <div className={styles.AboutAll}>
        <AnimatedPage>
            <div className={styles.AboutQuote}>code - rage - tilt - code</div>
            <div className={styles.MainAllNoise}></div>
            <div className={styles.AboutPortfolio}>Portfolio</div>
            <div className={styles.Memoji}></div>
            <div className={styles.InfoContainer}>
                <div className={styles.Info}>
                    Rostyk, raised by 2000’s.<br />
                    coder with massive experince<br />
                    in js libraries and design<br />
                    now available for you <Link to="/contact" className={styles.NoTextDecor}>visit <br /> contact to dm me.</Link>
                </div>
            </div>
            <Header />
        </AnimatedPage>
        </div>
        }

        {isTabletOrMobile && 
            <div className={styles_mobile.AboutAll}>
            <AnimatedPage>
                <div className={styles_mobile.AboutQuote}>code - rage - tilt - code</div>
                <div className={styles_mobile.MainAllNoise}></div>
                <div className={styles_mobile.AboutPortfolio}>Portfolio</div>
                <div className={styles_mobile.Memoji}></div>
                <div className={styles_mobile.InfoContainer}>
                    <div className={styles_mobile.Info}>
                        Rostyk, raised by 2000’s.<br />
                        coder with massive experince<br />
                        in js libraries and design<br />
                        now available for you <Link to="/contact" className={styles_mobile.NoTextDecor}>visit <br /> contact to dm me.</Link>
                    </div>
                </div>
                <Header />
            </AnimatedPage>
            </div>
        }
    </div>                    
}

export default About