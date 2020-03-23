import React from "react"

function Map() {
  const url = `https://www.google.com/maps/embed/v1/place?key=${process.env.GATSBY_GMAPS_API_KEY}
    &q=Aluminum+Associates,London+ON`

  return (
    <>
      <iframe
        src={url}
        className="google-map"
        allowFullScreen
      />
    </>
  )
}

export default Map
