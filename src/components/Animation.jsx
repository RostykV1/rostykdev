import { motion } from "framer-motion";

const animations = {
    initial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0},
    exit: { opacity: 0, x: -100 },
};

const AnimatedPage = ({ children }) => {
    return (
        <motion.div variants={animations} initial="initial" animate="animate" exit="exit"  transition={{  duration: 2,  delay: 0.1,  ease: [0, 0.71, 0.2, 1.01]}}>
            {children}
        </motion.div>
        
    )
}

export default AnimatedPage








