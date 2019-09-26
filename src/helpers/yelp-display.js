import React from 'react'

export default function yelpDis(dataArr) {
  if (dataArr.length >= 1) {
    const display = dataArr.map(data => {
      console.log(data.id)
      let address = 
      `
      ${data.location.display_address[0]},
      ${data.location.display_address[1]}
      `
      return (
        <div key={data.id}>
          <img src={`${data.image_url}`} />
          <p>Name: {data.name}</p>
          <p>Location: {address}</p>
          <p>Phone: {data.display_phone}</p>
          <p>Link: {data.url}</p>
          <p>Rating: {data.rating}</p>
          <p>Coordinates: latitude: {data.coordinates.latitude} longitude: {data.coordinates.longitude}</p>
        </div>
      )
    })
    return display
  }
}