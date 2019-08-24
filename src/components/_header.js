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
        <a href='/explore' onClick={handleOnClick}>Explore</a>
      </span>
      <span>
        <a href='/user/login' onClick={handleOnClick}>Login</a>
      </span>
    </>
  )
}