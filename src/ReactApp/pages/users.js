import React from 'react'
import { Route, Switch } from 'react-router-dom'
import UserInput from '../../components/user-input'

function Users() {
  return (
    <>
      <p>this is user page</p>
      <UserInput />
    </>
  )
}

export {Users}