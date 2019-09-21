import React from 'react'
import axios from 'axios'
import yelpDis from '../helpers/yelp-display'

export default function search (form, cb, num) {
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
    let display = yelpDis(response.data.businesses)
    cb(display)
    num(response.data.total)
  })
  .catch((error) => {
    console.log("this is axios error", error);
    cb(<p> No Results </p>)
  })
}
