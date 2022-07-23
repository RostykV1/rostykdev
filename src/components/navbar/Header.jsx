import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss'
import styles_mobile from './Header_mobile.module.scss'
import { motion } from "framer-motion"
import { useMediaQuery } from 'react-responsive'

const menu = [
    {
        title: "Main",  link:"/"
    },
    {
        title: "Portfolio", link:"/about"
    },
    {
        title: "Contact", link:"/contact"
    },
]

const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
}

const Header = () => {
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'})
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return<div>
        {isDesktopOrLaptop && 
                <div className={styles.NavAll}>
                    <ul className={styles.NavUl}>
                        {menu.map((item, index) => (
                            <li key={`menu item index: ${index}`} className={styles.NavLi}>
                                <motion.div whileHover={{}}><Link to={item.link} className={styles.NavLink}>{item.title}</Link></motion.div>
                            </li>
                        ))}
                    </ul>
                </div>
        }

        {isTabletOrMobile && 
                <div className={styles_mobile.NavAll}>
                <ul className={styles_mobile.NavUl}>
                    {menu.map((item, index) => (
                        <li key={`menu item index: ${index}`} className={styles_mobile.NavLi}>
                            <motion.div whileHover={{}}><Link to={item.link} className={styles_mobile.NavLink}>{item.title}</Link></motion.div>
                        </li>
                    ))}
                </ul>
            </div>
        }
    </div>
}

export default Header