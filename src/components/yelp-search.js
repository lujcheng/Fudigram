import React, { useState, useEffect } from 'react'
import axios from 'axios'


export default function YelpSearch() {
  const [term, setTerm] = useState('')

  const handleOnChange = e => {
    setTerm(e.target.value)
  }

  return (
    <>
      <p>Search Term: {term}</p>
      <input type='text' name='term' value={term} onChange={handleOnChange} />
    </>
  )
}

