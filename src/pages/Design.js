import React from 'react'
import ContentPage from '../components/ContentPage'

const offerings = [
  { title: 'Identity', description: 'Logos, marks, wordmarks, systems' },
  { title: 'Digital', description: 'Websites, apps, product surfaces' },
  { title: 'Art direction', description: 'Campaigns, photography, motion' },
  { title: 'Print', description: 'Editorial, packaging, collateral' }
]

const Design = () => (
  <ContentPage
    eyebrow='01 — CRAFT'
    lede='Identity systems, art direction, and digital product design that make brands unmistakable.'
    marqueeTitle='design'
    offerings={offerings}
  />
)

export default Design
