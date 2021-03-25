exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const res = await graphql(`
    query {
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
      servicePages: sanityServices {
        pages {
          title
          slug {
            current
          }
          _rawBody
        }
      }
      gallerySections: sanityGallery {
        sections {
          title
          slug {
            current
          }
          images {
            title
            excerpt
            image {
              asset {
                gatsbyImageData(placeholder: BLURRED)
              }
            }
          }
        }
      }
      faqTabs: sanityFaq {
        title
        slug {
          current
        }
        tabs {
          title
          slug {
            current
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
  const galleries = res.data.gallerySections.sections
  const servicePages = res.data.servicePages.pages
  const tabs = res.data.faqTabs.tabs

  products.forEach(edge => {
    const path = edge.node.category
      ? `/products/${edge.node.category.slug.current}/${edge.node.slug.current}`
      : `/products/${edge.node.slug.current}`

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

  galleries.forEach(page => {
    const { title, slug, images } = page
    const path = `/gallery/${slug.current}`
    createPage({
      path,
      component: require.resolve("./src/templates/gallery-page.js"),
      context: {
        title,
        slug: slug.current,
        images,
      },
    })
  })

  servicePages.forEach(page => {
    const { title, slug, _rawBody } = page
    const path = `/services/${slug.current}`
    createPage({
      path,
      component: require.resolve("./src/templates/generic-page.js"),
      context: {
        title,
        slug: slug.current,
        body: _rawBody,
      },
    })
  })

  tabs.forEach(tab => {
    const path = `/faq/${tab.slug.current}`
    createPage({
      path,
      component: require.resolve("./src/templates/faq-tab.js"),
      context: { slug: tab.slug.current },
    })
  })
}
