import React from 'react'
import { motion } from 'framer-motion'
import Header from '../components/Header'
import Marquee from '../components/Marquee'
import PageTransition from '../components/PageTransition'

const offerings = [
  { title: 'Identity', description: 'Logos, marks, wordmarks, systems' },
  { title: 'Digital', description: 'Websites, apps, product surfaces' },
  { title: 'Art direction', description: 'Campaigns, photography, motion' },
  { title: 'Print', description: 'Editorial, packaging, collateral' }
]

const Design = () => {
  return (
    <PageTransition>
      <Header />
      <div className='page-intro'>
        <span className='page-eyebrow'>01 — CRAFT</span>
        <motion.p
          className='page-lede'
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: 'easeInOut', duration: 1, delay: 0.9 }}
        >
          Identity systems, art direction, and digital product design that
          make brands unmistakable.
        </motion.p>
      </div>

      <Marquee title='design' delay={400} />

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
}

export default Design
