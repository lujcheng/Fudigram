import React, { useState, useEffect } from 'react'
import axios from 'axios'
import yelpDes from '../helpers/yelp-destruct'
import yelpDis from '../helpers/yelp-display'



const searchRequest = {
  term:'Four Barrel Coffee',
  location: 'san francisco, ca'
};

const apiKey = ' N-Uh_UVLvOVpyG4J0wzQvIsTP6ItKoJnS3aHJ69Q2QxDyvdbm9RB2zG1MpRNaRpw0wmmNjPw2F7nmM4cGlXpWlMfipJKd2XKJn29oOaxAgXpeLLimeSFTjFrNu5eXXYx'



export default function YelpSearch() {
  const [term, setTerm] = useState('')
  const [results, setResults] = useState('')
  const [number, setNumber] = useState(0)
  const [display, setDisplay] = useState([])
  
  const handleOnChange = e => {
    setTerm(e.target.value)
  }
  
  
  const handleSubmit = (e) => {
    e.preventDefault()
    let data = e.target
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
        console.log("response data", response.data)
        let resData = yelpDes(response.data)
        console.log(" this is resData", resData)
        setNumber(number + 1)
        setResults(resData)
        return resData
      })
      .then((responseb)=> {
        console.log("should have results:", results, number,responseb)
        // display = yelpDis(results)
        // console.log(display)
      })
      .catch((error) => {
        console.log("this is axios erroR", error);
        cb({name: 'no results'})
      })
    }
    search(data, setResults)
  }
  
  let display
  useEffect(() => {
    display = yelpDis(results)
    console.log("displayy variable", display)
  })
  
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
        {display}
      </div>
    </>
  )
}

