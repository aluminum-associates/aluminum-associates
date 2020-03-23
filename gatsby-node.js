const path = require("path")
const { createFilePath } = require(`gatsby-source-filesystem`)

module.exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === "MarkdownRemark") {
    const slug = path.basename(node.fileAbsolutePath, ".md")
    createNodeField({
      name: "slug",
      node,
      value: slug,
    })
  }
}
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const productTemplate = path.resolve("./src/templates/product.js")
  const response = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  if (response.errors) {
    throw response.errors
  }

  response.data.allMarkdownRemark.edges.map(edge => {
    createPage({
      path: `/products/${edge.node.fields.slug}`,
      component: productTemplate,
      context: {
        slug: edge.node.fields.slug,
      },
    })
  })
}
