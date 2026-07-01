import React, { useState, useEffect } from 'react'
import AnimatedLetters from './AnimatedLetters'

const Marquee = ({ title, delay = 2000 }) => {
  const [playMarquee, setPlayMarquee] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setPlayMarquee(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div className={`banner-row marquee ${playMarquee ? 'animate' : ''}`}>
      <div className='marquee__inner'>
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} />
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} disabled />
      </div>
    </div>
  )
}

export default Marquee
