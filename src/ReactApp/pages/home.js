import React from 'react'
import Axios from 'axios'
import YelpSearch from '../../components/yelp-search'

function Home() {
  return (
    <>
      <YelpSearch />
      <a href='/search'> Search </a>
      <a href='/users'> Users </a>
    </>
  )
}

export {Home}