import React from 'react'
import ContentPage from '../components/ContentPage'

const offerings = [
  { title: 'Founded', description: 'Amsterdam, 2024' },
  { title: 'Team', description: 'Two partners + collaborators' },
  { title: 'Clients', description: 'Early-stage to Series B' },
  { title: 'Approach', description: 'Slow, deliberate, opinionated' }
]

const About = () => (
  <ContentPage
    eyebrow='04 — STUDIO'
    lede='Ollie is a small independent studio. Two founders, a rotating cast of trusted collaborators, one point of contact.'
    marqueeTitle='about'
    offerings={offerings}
  />
)

export default About
