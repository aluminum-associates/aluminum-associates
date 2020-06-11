import React, { useState } from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

const ProductDropdown = () => {
  const [dropdown, setDropdown] = useState(false)

  return (
    <div
      role="button"
      tabIndex={-1}
      className={
        "navbar-item is-size-5 has-dropdown is-mega" +
        (dropdown ? " is-active" : "")
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
  let parentCategories = []
  let childCategories = []

  // 1. map over array and find "parent" categories and push to new array*/}
  // 2. find "child" categories and have them be sub-menu items of parent (in a new array)
  // 3. for every nth index, return a new block of items
  // 4. each grouping needs to have a class of "navbar-item" with a child div of "navbar-content"

  links.map(({ node: link }) => {
    if (link.parents && link.parents.length === 0) parentCategories.push(link)
    else if (link.parents && link.parents.length > 0) childCategories.push(link)
  })

  return (
    <div className="container is-fluid">
      {parentCategories.map(parent => (
        <div key={parent.id} className="navbar-content">
          <div className="title is-mega-menu-title is-size-6">
            {parent.title}
          </div>
          {childCategories.map(child =>
            child.parents[0].title === parent.title ? (
              <Link
                to={"/products/" + child.slug.current}
                className="navbar-item"
                activeClassName="is-active"
              >
                {child.title}
              </Link>
            ) : null
          )}
          {products.map(({ node: product }) =>
            product.category && product.category.title === parent.title ? (
              <Link
                to={
                  "/products/" +
                  product.category.slug.current +
                  "/" +
                  product.slug.current
                }
                className="navbar-item"
                activeClassName="is-active"
              >
                {product.title}
              </Link>
            ) : null
          )}
        </div>
      ))}
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
            title
            slug {
              current
            }
          }
        }
      }
    }
    products: allSanityProduct {
      edges {
        node {
          id
          title
          slug {
            current
          }
          category {
            title
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
