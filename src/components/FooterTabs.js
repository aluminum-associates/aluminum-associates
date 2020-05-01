import React from "react"
import { Link } from "gatsby"

export default function FooterTabs(props) {
  const url = window.location.pathname

  console.log(props.tabs)
  return (
    <div className="hero-footer">
      <div className="tabs is-boxed is-fullwidth">
        <div className="container">
          <ul>
            {props.tabs.map(tab => (
              <li
                key={tab.title}
                className={url === tab.slug ? "is-active" : ""}
              >
                <Link to={tab.slug}>{tab.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
