const path = require("path")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  //my contentful id making me get allContentfulTours instead of allContentfulTou because i name it tours instead of tour

  const { data } = await graphql(`
    query {
      tours: allContentfulTours {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  data.tours.edges.forEach(({ node }) => {
    createPage({
      path: `tours/${node.slug}`,
      component: path.resolve("./src/templates/tour-template.js"),
      context: {
        slug: node.slug,
      },
    })
  })
}
