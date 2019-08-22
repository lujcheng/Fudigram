import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'


function App() {
  axios.get('https://api.yelp.com/v3/businesses/search').then(res => {
    console.log(res)
  })
  return (
    <>
      <a href='/restaurants'> Search</a>

    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))