import React, { useState, useEffect } from 'react'
import axios from 'axios'
// const search = require('../helpers/yelp-search')

const searchRequest = {
  term:'Four Barrel Coffee',
  location: 'san francisco, ca'
};

const ApiKey = ' N-Uh_UVLvOVpyG4J0wzQvIsTP6ItKoJnS3aHJ69Q2QxDyvdbm9RB2zG1MpRNaRpw0wmmNjPw2F7nmM4cGlXpWlMfipJKd2XKJn29oOaxAgXpeLLimeSFTjFrNu5eXXYx'
const search = (cb) => {
  axios.get(`https://api.yelp.com/v3/businesses/search`, {
    params: {
      term:'Four Barrel Coffee',
      location: 'san francisco, ca'
    },
      headers: {
        Host: `api.yelp.com`,
        Accept: '*/*',
        Authorization: `Bearer ${ApiKey}`
      }

  })
  .then(function (response) {
    console.log(response)
    cb(JSON.stringify(response))
  })
  .catch(function (error) {
    console.log(error);
    cb(JSON.stringify(error))
  })
  // axios.create({
  //   baseURL: 'https://api.yelp.com/v3/businesses/search',
  //   transformRequest: [function (data, headers) {
  //     headers['Authorization'] = auth()
  //     return JSON.stringify(ApiKey)
  //   }],
  //   headers: {
  //     'Content-Type': 'application/json'
  //   }
  // })
}

export default function YelpSearch() {
  const [term, setTerm] = useState('')
  const [results, setResults] = useState('')
  const [number, setNumber] = useState(0)

  const handleOnChange = e => {
    setTerm(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setNumber(number + 1)
    search(setResults)
  }


  return (
    <>
      <p>Search Term: {term}</p>
      <form>
        <input type='text' name='term' value={term} onChange={handleOnChange} onSubmit={handleSubmit} />
        <button type='submit' onClick={handleSubmit}>submit</button>
      </form>
      <p>Search results: {number}, {results} </p>

    </>
  )
}

