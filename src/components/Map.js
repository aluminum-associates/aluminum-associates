import React, { memo, useState } from "react"
import { GoogleMap, useLoadScript } from "@react-google-maps/api"

function Map() {
  const [myMap, setMyMap] = useState(null)
  const [center, setCenter] = useState({ lat: 42.9903897, lng: -81.1742453 })

  const containerStyle = {
    width: "100%",
    height: "400px",
    margin: "1.5rem 0",
  }

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GATSBY_GMAPS_API_KEY,
  })

  const renderMap = () => (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={16}
      onLoad={map => setMyMap(map)}
    ></GoogleMap>
  )

  return isLoaded ? renderMap() : null
}

export default memo(Map)
