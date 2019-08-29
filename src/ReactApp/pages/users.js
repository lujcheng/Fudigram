import React from 'react'
import { Route, Switch } from 'react-router-dom'

function Home() {
  return (
    <Switch>
      <Route path='/:id'/>
    </Switch>
  )
}

export default Home