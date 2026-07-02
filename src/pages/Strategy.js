import React from 'react'
import ContentPage from '../components/ContentPage'

const offerings = [
  { title: 'Research', description: 'Market, audience, category' },
  { title: 'Positioning', description: 'Proposition, pillars, promise' },
  { title: 'Narrative', description: 'Story, tone, messaging' },
  { title: 'Naming', description: 'Brand and product nomenclature' }
]

const Strategy = () => (
  <ContentPage
    eyebrow='02 — FOUNDATIONS'
    lede='Positioning, narrative, and brand architecture built to make every downstream decision easier.'
    marqueeTitle='strategy'
    offerings={offerings}
  />
)

export default Strategy
