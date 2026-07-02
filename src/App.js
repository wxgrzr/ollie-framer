import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import './sass/main.scss'

import Header from './components/Header'
import Home from './pages/Home'
import Design from './pages/Design'
import Strategy from './pages/Strategy'
import About from './pages/About'
import Why from './pages/Why'
import Contact from './pages/Contact'

const AnimatedRoutes = ({ homeLoading, setHomeLoading }) => {
  const location = useLocation()

  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
        <Route exact path='/' render={() => <Home loading={homeLoading} setLoading={setHomeLoading} />} />
        <Route exact path='/design' component={Design} />
        <Route exact path='/strategy' component={Strategy} />
        <Route exact path='/about' component={About} />
        <Route exact path='/why' component={Why} />
        <Route exact path='/contact' component={Contact} />
      </Switch>
    </AnimatePresence>
  )
}

const AppShell = ({ homeLoading, setHomeLoading }) => {
  const location = useLocation()
  const showHeader = location.pathname !== '/' || !homeLoading

  return (
    <>
      {showHeader && <Header />}
      <AnimatedRoutes homeLoading={homeLoading} setHomeLoading={setHomeLoading} />
    </>
  )
}

function App () {
  const [homeLoading, setHomeLoading] = useState(true)

  return (
    <Router>
      <AppShell homeLoading={homeLoading} setHomeLoading={setHomeLoading} />
    </Router>
  )
}

export default App
