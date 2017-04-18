const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition()
  } else {
    print "Geolocation is not supported on your Busted A$$ Browser..."
  }
}

const getCity = (position) => {
  let latitude = position.coords.longitude
  let longitude = position.coords.longitude

}
