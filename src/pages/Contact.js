import React from 'react'
import ContentPage from '../components/ContentPage'

const offerings = [
  { title: 'Email', description: 'hello@ollie.studio' },
  { title: 'Phone', description: '+31 20 000 0000' },
  { title: 'Studio', description: 'Prinsengracht 1, Amsterdam' },
  { title: 'Instagram', description: '@ollie.studio' }
]

const Contact = () => (
  <ContentPage
    eyebrow='06 — SAY HELLO'
    lede="Tell us what you're building. We reply within two working days."
    marqueeTitle='contact'
    offerings={offerings}
  />
)

export default Contact
