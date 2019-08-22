import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import YelpSearch from './components/yelp-search'


function App() {
 
  return (
    <>
      <a href='/restaurants'> Search</a>
      <YelpSearch />

    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))