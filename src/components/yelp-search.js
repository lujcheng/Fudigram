import React, { useState, useEffect } from 'react'
import axios from 'axios'
import yelpDes from '../helpers/yelp-destruct'



const searchRequest = {
  term:'Four Barrel Coffee',
  location: 'san francisco, ca'
};

const apiKey = ' N-Uh_UVLvOVpyG4J0wzQvIsTP6ItKoJnS3aHJ69Q2QxDyvdbm9RB2zG1MpRNaRpw0wmmNjPw2F7nmM4cGlXpWlMfipJKd2XKJn29oOaxAgXpeLLimeSFTjFrNu5eXXYx'
const search = (form, cb) => {
  let data
  if (form.term.value) {
    data = { term: form.term.value }
  }
  if (form.location.value) {
    data = {...data, location: form.location.value }
  }
  axios.post('/restaurants', {
    data: data
  })
  .then((response) => {
    console.log("this is the axios response", response)
    let resData = yelpDes(response.data)
    console.log(response.data)
    cb(JSON.stringify(resData))
  })
  .catch((error) => {
    console.log("this is axios erroR", error);
    cb(JSON.stringify(error))
  })

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

