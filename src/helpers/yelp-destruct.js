export default function yelpDes(dataArr) {
  const display = dataArr.businesses.map(data => {
    return (
      <div id={data.id}>
        <p>Name: {data.name}</p>
        <p>Location: {data.location.display_address}</p>
        <p>Phone: {data.display_phone}</p>
        <p>Link: {data.url}</p>
        <p>Rating: {data.rating}</p>
        <p>Coordinates: {data.coordinates}</p>
      </div>
    )
  })
  // for (let data of dataArr.businesses) {
  //   display.push({
  //     name: data.name,
  //     url: data.url,
  //     rating: data.rating,
  //     coordinates: data.coordinates,
  //     location: data.location,
  //     phone: data.display_phone
  //   })
  // }
  return display
}