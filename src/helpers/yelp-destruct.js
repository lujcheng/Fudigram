export default function yelpDes(dataArr) {
  const display = []
  for (let data of dataArr.businesses) {
    display.push({
      name: data.name,
      url: data.url,
      rating: data.rating,
      coordinates: data.coordinates,
      location: data.location,
      phone: data.display_phone
    })
  }
  return display
}