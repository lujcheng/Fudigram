import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import jsonAdapter from 'axios-jsonp'
// const search = require('../helpers/yelp-search')

const searchRequest = {
  term:'Four Barrel Coffee',
  location: 'san francisco, ca'
};

const apiKey = ' N-Uh_UVLvOVpyG4J0wzQvIsTP6ItKoJnS3aHJ69Q2QxDyvdbm9RB2zG1MpRNaRpw0wmmNjPw2F7nmM4cGlXpWlMfipJKd2XKJn29oOaxAgXpeLLimeSFTjFrNu5eXXYx'
const search = (form, cb) => {
  let data = {
    term: form.term.value,
    location: form.location.value
  }
  console.log("this be data", data)
  // axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://api.yelp.com/v3/businesses/search`, {
  //   params: {
  //     // term:'Four Barrel Coffee',
  //     location: 'san francisco, ca'
  //   },
  //     headers: {
  //       "accept": "application/json",
  //       "x-requested-with": "xmlhttprequest",
  //       "Access-Control-Allow-Origin":"*",
  //       "Authorization": `Bearer ${apiKey}`
  //     }

  // })
  axios.post('/restaurants', {
    data: data
  })
  .then((response) => {
    console.log("this is the axios response", response)
    cb(JSON.stringify(response.data))
  })
  .catch((error) => {
    console.log("this is axios erroR", error);
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
    let data = e.target
    console.log(data)
    setNumber(number + 1)
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
      <p>Search results: {number}, {results} </p>

    </>
  )
}

