import React from 'react'
import Header from '../components/Header'
import Marquee from '../components/Marquee'
import PageTransition from '../components/PageTransition'

const Placeholder = ({ title }) => (
  <PageTransition>
    <Header />
    <Marquee title={title} delay={400} />
  </PageTransition>
)

export default Placeholder
