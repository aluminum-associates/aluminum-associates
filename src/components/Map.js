import React, { memo, useState } from "react"
import { GoogleMap, useLoadScript } from "@react-google-maps/api"
import { AspectRatio } from "@chakra-ui/layout"

function Map() {
  const [myMap, setMyMap] = useState(null)

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GATSBY_GMAPS_API_KEY,
  })

  const renderMap = () => (
    <AspectRatio ratio={4 / 3} mb="1rem">
      <GoogleMap
        center={{ lat: 42.9903897, lng: -81.1742453 }}
        zoom={16}
        onLoad={map => setMyMap(map)}
      />
    </AspectRatio>
  )

  return isLoaded ? renderMap() : null
}

export default memo(Map)
