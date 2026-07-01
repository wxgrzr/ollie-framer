import React from 'react'
import { motion } from 'framer-motion'
import Header from './Header'
import Marquee from './Marquee'
import PageTransition from './PageTransition'

const ContentPage = ({ eyebrow, lede, marqueeTitle, offerings }) => (
  <PageTransition>
    <Header />
    <div className='page-intro'>
      <span className='page-eyebrow'>{eyebrow}</span>
      <motion.p
        className='page-lede'
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ ease: 'easeInOut', duration: 1, delay: 0.9 }}
      >
        {lede}
      </motion.p>
    </div>

    <Marquee title={marqueeTitle} delay={400} />

    <div className='page-offer'>
      <span className='page-eyebrow'>What we offer</span>
      <ul className='offer-list'>
        {offerings.map(({ title, description }) => (
          <li key={title} className='offer-row'>
            <span className='offer-title'>{title}</span>
            <span className='offer-description'>{description}</span>
          </li>
        ))}
      </ul>
    </div>
  </PageTransition>
)

export default ContentPage
