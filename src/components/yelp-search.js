import React, { useState, useEffect } from 'react'
import search from '../helpers/yelp-search'



const searchRequest = {
  term:'Four Barrel Coffee',
  location: 'san francisco, ca'
};

const apiKey = ' N-Uh_UVLvOVpyG4J0wzQvIsTP6ItKoJnS3aHJ69Q2QxDyvdbm9RB2zG1MpRNaRpw0wmmNjPw2F7nmM4cGlXpWlMfipJKd2XKJn29oOaxAgXpeLLimeSFTjFrNu5eXXYx'



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
    search(data, setResults)
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

