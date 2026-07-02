import React from 'react'
import { motion } from 'framer-motion'
import AnimatedLetters from './AnimatedLetters'
import Marquee from './Marquee'

const banner = {
  animate: {
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.1
    }
  }
}

const Banner = ({ skipIntro = false }) => {
  return (
    <motion.div
      variants={skipIntro ? undefined : banner}
      className='banner'
      initial={skipIntro ? { opacity: 0, y: 24 } : undefined}
      animate={skipIntro ? { opacity: 1, y: 0 } : undefined}
      transition={skipIntro ? { ease: 'easeInOut', duration: 0.6, delay: 0.7 } : undefined}
    >
      <BannerRowTop title={'brand'} skipIntro={skipIntro} />
      <Marquee title={'experience'} skipIntro={skipIntro} />
      <BannerRowBottom title={'studio'} skipIntro={skipIntro} />
    </motion.div>
  )
}

const BannerRowTop = ({ title, skipIntro }) => {
  return (
    <div className={'banner-row'}>
      <div className='row-col'>
        <AnimatedLetters title={title} disabled={skipIntro} />
      </div>
      <motion.div
        initial={skipIntro ? false : { opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          ease: 'easeInOut',
          duration: 1,
          delay: 0.4
        }}
        className='row-col'
      >
        <span className='row-message'>
          We are specialised in setting up the foundation of your brand and
          setting you up for success.
        </span>
      </motion.div>
    </div>
  )
}

const BannerRowBottom = ({ title, skipIntro }) => {
  return (
    <div className={'banner-row center'}>
      <motion.div
        className='scroll'
        initial={skipIntro ? false : { scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ ease: [0.6, 0.01, -0.05, 0.95], duration: 1, delay: 1 }}
      >
        <motion.span
          initial={skipIntro ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1,
            delay: 1.8
          }}
        >
          scroll
        </motion.span>
        <motion.span
          initial={skipIntro ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: [0.6, 0.01, -0.05, 0.95],
            duration: 1,
            delay: 1.8
          }}
        >
          down
        </motion.span>
      </motion.div>
      <AnimatedLetters title={title} disabled={skipIntro} />
    </div>
  )
}

export default Banner
