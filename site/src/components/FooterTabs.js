import React from "react"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"

const FooterTabs = (props, context) => {
  const url = useLocation().pathname

  return (
    <div className="hero-footer">
      <div className="tabs is-boxed is-fullwidth">
        <div className="container" style={{ maxWidth: "75ch" }}>
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

export default FooterTabs