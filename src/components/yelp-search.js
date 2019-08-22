import React, { useState } from 'react'
import axios from 'axios'


function apiSearch() {
  axios.get('https://api.yelp.com/v3/businesses/search').then(res => {
    console.log(res)
  }
}

function YelpSearch() {
  const [term, setTerm] = useState('')
  return (
    <>
      <p>Search Term: {term}</p>
      <input type='text' onChange={console.log(this.val)} />
    </>
  )
}