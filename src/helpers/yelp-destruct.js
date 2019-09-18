export default function yelpDes(data) {
  let display
  // if (data.name && data.url && data.rating && data.coordinates && data.location && data.display_phone) {
    display = {
      name: data.name,
      url: data.url,
      rating: data.rating,
      coordinates: data.coordinates,
      location: data.location,
      phone: data.display_phone
    }
  // }
  return display
}