export default function yelpDis(dataArr) {
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
  return display
}