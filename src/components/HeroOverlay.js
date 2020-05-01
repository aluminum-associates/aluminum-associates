import React from "react"

export default function HeroOverlay(props) {
  return (
    <div
      className="overlay"
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.25)",
      }}
    >
      {props.children}
    </div>
  )
}
