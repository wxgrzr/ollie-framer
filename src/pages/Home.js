import React, { useState } from 'react'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'

// Components
import Header from '../components/Header'
import Banner from '../components/Banner'
import Loader from '../components/Loader'

const Home = () => {
  const [loading, setLoading] = useState(true)

  return (
    <AnimateSharedLayout type='crossfade'>
      <AnimatePresence>
        {loading ? (
          <motion.div key='loader'>
            <Loader setLoading={setLoading} />
          </motion.div>
        ) : (
          <>
            <Header />
            <Banner />
            {!loading && (
              <div className='transition-image final'>
                <motion.img
                  transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
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
