import React, { useState, useEffect } from 'react'
import AnimatedLetters from './AnimatedLetters'

const Marquee = ({ title, delay = 2000, skipIntro = false }) => {
  const [playMarquee, setPlayMarquee] = useState(skipIntro)

  useEffect(() => {
    if (skipIntro) return
    const timer = setTimeout(() => setPlayMarquee(true), delay)
    return () => clearTimeout(timer)
  }, [delay, skipIntro])

  return (
    <div className={`banner-row marquee ${playMarquee ? 'animate' : ''}`}>
      <div className='marquee__inner'>
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} disabled={skipIntro} />
        <AnimatedLetters title={title} disabled />
        <AnimatedLetters title={title} disabled />
      </div>
    </div>
  )
}

export default Marquee
