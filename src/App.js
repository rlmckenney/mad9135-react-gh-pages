import React from 'react'
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'

const Home = () => <h1>Home on Netlify</h1>
const About = () => <h1>About</h1>
const Contact = () => <h1>Contact</h1>

function App () {
  return (
    <div className='App'>
      <Router>
        <header>
          <nav>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
          </nav>
        </header>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
