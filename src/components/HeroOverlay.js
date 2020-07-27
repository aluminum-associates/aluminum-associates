import React from "react"

export default function HeroOverlay(props) {
  return (
    <div
      className="overlay"
      style={{
        minWidth: "100%",
        minHeight: "100%",
        backgroundColor: "rgba(0,0,0,0.55)",
        flex: "1 0 auto",
        display: "flex",
        alignItems: "center",
      }}
    >
      {props.children}
    </div>
  )
}
