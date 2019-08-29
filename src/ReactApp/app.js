import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home, Users } from './pages'
import Registration from './pages/registration'
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
        <Route path='/users' component={Users} />
        <Route path='/registration' component={Registration} />
      </Switch>
    </div>
  </div>
  )


export default App