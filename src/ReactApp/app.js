import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './pages/home'
import _header from '../components/_header'
// import ReactDOM from 'react-dom'
// import axios from 'axios'
// import YelpSearch from './components/yelp-search'
// import Header from './components/_header'


const App = () => (
  <div>
    <_header />
    <div>
      <Switch>
        <Route exact path='/' component={Home}/>
      </Switch>
    </div>
  </div>
  )


export default App