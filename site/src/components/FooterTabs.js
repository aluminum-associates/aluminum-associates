import React from "react"
import { Link } from "gatsby"
import { useLocation } from "@reach/router"

const FooterTabs = (props, context) => {
  const currentPath = useLocation().pathname

  return (
    <div className="hero-footer">
      <div className="tabs is-boxed is-fullwidth">
        <div className="container" style={{ maxWidth: "75ch" }}>
          <ul>
            {props.tabs.map(tab => {
              const { title, slug } = tab
              return (
                <li key={title} className={currentPath === slug ? "is-active" : ""}>
                  <Link to={slug}>{title}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FooterTabs
