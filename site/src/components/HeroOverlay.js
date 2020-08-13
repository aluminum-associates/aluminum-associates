import React from "react"

export default function HeroOverlay(props) {
  return (
    <div
      className="overlay"
      style={{
        minWidth: "100%",
        minHeight: "100%",
        background: "radial-gradient(transparent, rgba(0,0,0,0.45))",
        flex: "1 0 auto",
        display: "flex",
        alignItems: "center",
      }}
    >
      {props.children}
    </div>
  )
}
