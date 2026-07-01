import React from 'react'
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import './sass/main.scss'

import Home from './pages/Home'
import Design from './pages/Design'
import Placeholder from './pages/Placeholder'

const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route exact path='/' component={Home} />
        <Route exact path='/design' component={Design} />
        <Route exact path='/strategy' render={() => <Placeholder title='strategy' />} />
        <Route exact path='/cases' render={() => <Placeholder title='cases' />} />
        <Route exact path='/about' render={() => <Placeholder title='about' />} />
        <Route exact path='/why' render={() => <Placeholder title='why us' />} />
        <Route exact path='/contact' render={() => <Placeholder title='contact' />} />
      </Switch>
    </AnimatePresence>
  )
}

function App () {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  )
}

export default App
