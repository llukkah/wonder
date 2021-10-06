exports.createPages = async ({ graphql, actions }) => {
  const path = require(`path`)
  const { createPage } = actions
  const postTemplate = path.resolve("src/templates/blog-post.js")
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark {
          edges {
            node {
              html
              id
              frontmatter {
                path
                title
                date
                author
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.frontmatter.path,
          component: postTemplate,
        })
      })
      resolve()
    })
  }).catch(error => {
    console.log(error)
    reject()
  })
}
