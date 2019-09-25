import React from 'react'
import UserInput from '../../components/user-input'

function Registration() {
  let input = UserInput('/registration')
  return (
    <>
      {input}
    </>
  )
}

export default Registration