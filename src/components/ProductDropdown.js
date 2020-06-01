import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const ProductDropdown = () => {
  const [dropdown, setDropdown] = useState(false)

  return (
    <div
      role="button"
      tabIndex={-1}
      className={
        "navbar-item is-size-5 has-dropdown is-hoverable" +
        (dropdown ? " is-active" : null)
      }
      style={{
        border: "none",
        outline: "none",
        background: "transparent",
        "&:active": {
          border: "none",
          outline: "none",
        },
      }}
      onClick={() => setDropdown(!dropdown)}
      onKeyDown={e =>
        e.key === "Escape" || e.key === "Enter" ? setDropdown(!dropdown) : null
      }
    >
      <span className="navbar-link">Products</span>
      <div className={"navbar-dropdown" + (dropdown ? "" : " is-hidden-touch")}>
        <ProductLinks />
      </div>
    </div>
  )
}

const ProductLinks = () => {
  const query = useStaticQuery(data)
  const categories = query.categories.edges
  const products = query.products.edges
  const links = [...categories, ...products]

  return (
    <div class="container is-fluid">
      <div class="columns">
        {links.map(({ node: link }) =>
          link.parents && link.parents.length === 0 ? (
            <div class="column">
              <Link
                key={link.id}
                to={"/products/" + link.slug.current}
                className="navbar-item"
                activeClassName="is-active"
              >
                {link.title}
              </Link>
            </div>
          ) : link.category === null ? (
            <div class="column">
              <Link
                key={link.id}
                to={"/products/" + link.slug.current}
                className="navbar-item"
                activeClassName="is-active"
              >
                {link.title}
              </Link>
            </div>
          ) : null
        )}
      </div>
    </div>
  )
}

export const data = graphql`
  {
    categories: allSanityCategory(
      filter: { slug: { current: { ne: null } } }
      sort: { fields: title }
    ) {
      edges {
        node {
          id
          title
          slug {
            current
          }
          parents {
            id
            slug {
              current
            }
          }
        }
      }
    }
    products: allSanityProduct(
      filter: {
        slug: { current: { ne: null } }
        category: { slug: { current: { eq: null } } }
      }
      sort: { fields: title }
    ) {
      edges {
        node {
          id
          title
          slug {
            current
          }
          category {
            slug {
              current
            }
          }
        }
      }
    }
  }
`

export default ProductDropdown
