import React from 'react'
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