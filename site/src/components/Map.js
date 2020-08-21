import React, { useState, useCallback } from "react"
import { GoogleMap, LoadScript } from "@react-google-maps/api"

const containerStyle = {
  width: "100%",
  height: "400px",
  padding: "1.5rem 0",
}

const center = {
  lat: 42.9903897,
  lng: -81.1742453,
}

function Map() {
  const [gmap, setGmap] = useState(null)

  const onLoad = useCallback(gmap => {
    const bounds = new window.google.maps.LatLngBounds()
    gmap.fitBounds(bounds)
    setGmap(gmap)
  }, [])

  const onUnmount = useCallback(() => {
    setGmap(null)
  }, [])

  return (
    <LoadScript googleMapsApiKey={process.env.GATSBY_GMAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
        onLoad={onLoad}
        onUnmount={onUnmount}
      ></GoogleMap>
    </LoadScript>
  )
}

export default Map
