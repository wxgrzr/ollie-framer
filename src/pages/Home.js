import React, { useRef } from 'react'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'
import { Link } from 'react-router-dom'

// Components
import Banner from '../components/Banner'
import Loader from '../components/Loader'
import Marquee from '../components/Marquee'

const offerings = [
  { title: 'Design', description: 'Identity, art direction, product', to: '/design' },
  { title: 'Strategy', description: 'Positioning, narrative, naming', to: '/strategy' },
  { title: 'Studio', description: 'Two founders, one point of contact', to: '/about' },
  { title: 'Why us', description: 'Systems your team can run', to: '/why' }
]

const Home = ({ loading, setLoading }) => {
  const skipIntro = useRef(!loading).current

  return (
    <AnimateSharedLayout type='crossfade'>
      <AnimatePresence>
        {loading ? (
          <motion.div key='loader'>
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
            <Banner skipIntro={skipIntro} />
            {!loading && (
              <div className='transition-image final'>
                <motion.img
                  initial={skipIntro ? { opacity: 0 } : undefined}
                  animate={skipIntro ? { opacity: 1 } : undefined}
                  transition={
                    skipIntro
                      ? { ease: 'easeInOut', duration: 0.6, delay: 0.7 }
                      : { ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }
                  }
                  src={process.env.PUBLIC_URL + `/images/image-2.jpg`}
                  layoutId='main-image-1'
                />
              </div>
            )}
            {!loading && (
              <>
                <div className='page-intro'>
                  <span className='page-eyebrow'>00 — OVERVIEW</span>
                  <motion.p
                    className='page-lede'
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ ease: 'easeInOut', duration: 1, delay: 0.9 }}
                  >
                    One studio, four disciplines. Everything below feeds the same
                    foundation, built once and reused everywhere.
                  </motion.p>
                </div>

                <Marquee title='ollie' delay={400} />

                <div className='page-offer'>
                  <span className='page-eyebrow'>What we offer</span>
                  <ul className='offer-list'>
                    {offerings.map(({ title, description, to }) => (
                      <li key={title} className='offer-row'>
                        <Link to={to} className='offer-link'>
                          <span className='offer-title'>
                            {title}
                            <span className='offer-arrow' aria-hidden='true'>
                              →
                            </span>
                          </span>
                          <span className='offer-description'>{description}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  )
}

export default Home
