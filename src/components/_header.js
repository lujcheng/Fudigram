import React from 'react'

export default function Header() {

  const handleOnClick = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <span>
        FudiGram
      </span>
      <span>
        <input type='text' placeholder='Search Friends' />
      </span>
      <span>
        Explore
      </span>
      <span>
        <a href='/user/login' onClick={handleOnClick}>Login</a>
      </span>
    </>
  )
}