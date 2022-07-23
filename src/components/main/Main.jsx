import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../navbar/Header.jsx'
import styles from './Main.module.scss'
import styles_mobile from './Main_mobile.module.scss'
import AnimatedPage from '../Animation.jsx';
import { useMediaQuery } from 'react-responsive'

import { MotionConfig, motion } from "framer-motion"
import { MotionCanvas, motion as motion3d } from "framer-motion-3d"
const Main = () => {

const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'})
const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return <div className={styles.MainAll}>
        {isDesktopOrLaptop && 
            <AnimatedPage>
            <div className={styles.MainAllNoise}></div>
            <div className={styles.Memoji}></div>
                <div className={styles.MainQuote}>I believe coding can be more diverse, so everyday I code to prove it.  </div>
                    <div className={styles.MainMiddle}>
                        <div className={styles.MainRostyk}>Rostyk.</div>
                    </div>
                    <div className={styles.MainMiddle}>
                        <div className={styles.MainFullStackDev}>Full-stack dev</div>
                    </div>
                <Header />
            </AnimatedPage>
        }

        {isTabletOrMobile && 
            <AnimatedPage>
            <div className={styles_mobile.MainAllNoise}></div>
            <div className={styles_mobile.Memoji}></div>
                <div className={styles_mobile.MainQuote}>I believe coding can be more diverse, so everyday I code to prove it.  </div>
                    <div className={styles_mobile.MainMiddle}>
                        <div className={styles_mobile.MainRostyk}>Rostyk.</div>
                    </div>
                    <div className={styles_mobile.MainMiddle}>
                        <div className={styles_mobile.MainFullStackDev}>Full-stack dev</div>
                    </div>
                <Header />
            </AnimatedPage>
        }
    </div>
}

export default Main