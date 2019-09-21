import React, { useState, useEffect } from 'react'
import search from '../helpers/yelp-search'

export default function YelpSearch() {
  const [term, setTerm] = useState('')
  const [results, setResults] = useState([])
  const [number, setNumber] = useState(0)
  
  const handleOnChange = e => {
    setTerm(e.target.value)
  }
  
  
  const handleSubmit = (e) => {
    e.preventDefault()
    let data = e.target
    search(data, setResults, setNumber)
  }
  
  
  return (
    <>
      <p>Search Term: {term}</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor='term'>Name</label>
        <input type='text' name='term' value={term} onChange={handleOnChange} />
        <label htmlFor='location'>Location</label>
        <input type='text' name='location' defaultValue='' />
        <button type='submit' >submit</button>
      </form>
      <p>Search results: {number} </p>
      <div>
        {results}
      </div>
    </>
  )
}

