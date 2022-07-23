import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../navbar/Header.jsx'
import styles from './Contact.module.scss'
import styles_mobile from './Contact_mobile.module.scss'
import AnimatedPage from '../Animation.jsx';
import { useMediaQuery } from 'react-responsive'

const Contact = () => {
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'})
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return <div>
        {isDesktopOrLaptop && 
            <div className={styles.AboutAll}>
            <AnimatedPage>
                <div className={styles.AboutQuote}>Experience = knowledge</div>
                <div className={styles.MainAllNoise}></div>
                <div className={styles.AboutPortfolio}>Contact</div>
                <div className={styles.Memoji}></div>
                <div className={styles.InfoContainer}>
                    <div className={styles.Info}>
                        Telegram: @thf1111<br />
                        Discord: thf#1111
                    </div>
                </div>
                <Header />
            </AnimatedPage>
            </div>
        }

        {isTabletOrMobile && 
            <div className={styles_mobile.AboutAll}>
            <AnimatedPage>
                <div className={styles_mobile.AboutQuote}>Experience = knowledge</div>
                <div className={styles_mobile.MainAllNoise}></div>
                <div className={styles_mobile.AboutPortfolio}>Contact</div>
                <div className={styles_mobile.Memoji}></div>
                <div className={styles_mobile.InfoContainer}>
                    <div className={styles_mobile.Info}>
                        Telegram: @thf1111<br />
                        Discord: thf#1111
                    </div>
                </div>
                <Header />
            </AnimatedPage>
            </div>
        }
        </div>    
}

export default Contact