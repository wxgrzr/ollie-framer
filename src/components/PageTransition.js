import React from 'react'
import { motion } from 'framer-motion'

const contentVariants = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { ease: 'easeInOut', duration: 0.6, delay: 0.7 }
  },
  exit: {
    opacity: 0,
    transition: { ease: 'easeInOut', duration: 0.3 }
  }
}

const overlayVariants = {
  initial: { x: '0%' },
  animate: {
    x: '-100%',
    transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 0.9, delay: 0.15 }
  },
  exit: {
    x: '0%',
    transition: { ease: [0.6, 0.01, -0.05, 0.95], duration: 0.4 }
  }
}

const PageTransition = ({ children }) => (
  <motion.div className='page-transition' initial='initial' animate='animate' exit='exit'>
    <motion.div className='page-transition__overlay' variants={overlayVariants} />
    <motion.div variants={contentVariants}>{children}</motion.div>
  </motion.div>
)

export default PageTransition
