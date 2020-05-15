const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const res = await graphql(`
    query {
      pages: allSanityPage(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
      products: allSanityProduct(filter: { slug: { current: { ne: null } } }) {
        edges {
          node {
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
      categories: allSanityCategory(
        filter: { slug: { current: { ne: null } } }
      ) {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `)

  if (res.errors) {
    throw res.errors
  }

  const products = res.data.products.edges
  const categories = res.data.categories.edges
  const pages = res.data.pages.edges

  products.forEach(edge => {
    const path = `/products/${edge.node.category.slug.current}/${edge.node.slug.current}`
    createPage({
      path,
      component: require.resolve("./src/templates/product.js"),
      context: { slug: edge.node.slug.current },
    })
  })

  categories.forEach(edge => {
    const path = `/products/${edge.node.slug.current}`
    createPage({
      path,
      component: require.resolve("./src/templates/category.js"),
      context: { slug: edge.node.slug.current },
    })
  })

  pages.forEach(edge => {
    const path = `/${edge.node.slug.current}`
    createPage({
      path,
      component: require.resolve("./src/templates/page.js"),
      context: { slug: edge.node.slug.current },
    })
  })
}
