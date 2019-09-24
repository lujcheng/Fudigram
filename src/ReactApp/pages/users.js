import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Login from '../../components/loginput'

function Users() {
  return (
    <>
      <p>this is user page</p>
      <Login />
    </>
  )
}

export {Users}