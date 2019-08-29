import React from 'react'
import { Route, Switch } from 'react-router-dom'

function Home() {
  return (
    <>
      <a href='/search'> Search </a>
      <a href='/users'> Users </a>
    </>
  )
}

export default Home