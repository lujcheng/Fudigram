import React from 'react'
import { Route, Switch } from 'react-router-dom'
import UserInput from '../../components/user-input'

function Users() {
  let input = UserInput('/users')
  return (
    <>
      <p>this is user page</p>
      {input}
    </>
  )
}

export {Users}