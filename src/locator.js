const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition)
  } else {
    print "Geolocation is not supported on your Busted A$$ Browser..."
  }
}
