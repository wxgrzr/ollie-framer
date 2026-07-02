import React, { useRef } from 'react'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'

// Components
import Banner from '../components/Banner'
import Loader from '../components/Loader'

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
          </>
        )}
      </AnimatePresence>
    </AnimateSharedLayout>
  )
}

export default Home
