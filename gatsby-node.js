const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const homeTemplate = path.resolve('src/templates/home-template.js')
    // Query for markdown nodes to use in creating pages.
    // You can query for whatever data you want to create pages for e.g.
    // products, portfolio items, landing pages, etc.
    // Variables can be added as the second function parameter
    const pages = await graphql(`
    {
    allContentfulPage {
        nodes {
          name
          sections {
            heading
            subtitle
            internal {
              type
            }
          }
        }
      }
    }
  `)
    pages.data.allContentfulPage.nodes.forEach(page => {
        createPage({
            path: '/home2',
            component: homeTemplate,
            context: {
                sections: page.sections
            }
        })
    })
}
