import React from 'react'
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import './sass/main.scss'

import Home from './pages/Home'
import Design from './pages/Design'
import Strategy from './pages/Strategy'
import About from './pages/About'
import Why from './pages/Why'
import Contact from './pages/Contact'

const AnimatedRoutes = () => {
  const location = useLocation()

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route exact path='/' component={Home} />
        <Route exact path='/design' component={Design} />
        <Route exact path='/strategy' component={Strategy} />
        <Route exact path='/about' component={About} />
        <Route exact path='/why' component={Why} />
        <Route exact path='/contact' component={Contact} />
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
