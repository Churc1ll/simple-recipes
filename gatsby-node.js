const path = require("path")
const slugify = require("slugify")
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query getRecipes {
      allContentfulRecipe {
        nodes {
          content {
            tags
          }
        }
      }
    }
  `)
  result.data.allContentfulRecipe.nodes.forEach(node => {
    node.content.tags.forEach(tag => {
      createPage({
        path: `/tags/${slugify(tag, { lovwer: true })}`,
        component: path.resolve(`src/templates/tag-template.js`),
        context: {
          tag: tag,
        },
      })
    })
  })
}
