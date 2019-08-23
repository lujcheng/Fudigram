import React, { useState, useEffect } from 'react'
import axios from 'axios'
const search = require('../helpers/yelp-search')

const searchRequest = {
  term:'Four Barrel Coffee',
  location: 'san francisco, ca'
};

export default function YelpSearch() {
  const [term, setTerm] = useState('')
  const [results, setResults] = useState('')

  const handleOnChange = e => {
    setTerm(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setResults(search(searchRequest))
  }


  return (
    <>
      <p>Search Term: {term}</p>
      <form>
        <input type='text' name='term' value={term} onChange={handleOnChange} onSubmit={handleSubmit} />
        <button type='submit' onClick={handleSubmit}>submit</button>
      </form>
      <p>Search results: {results} </p>

    </>
  )
}

