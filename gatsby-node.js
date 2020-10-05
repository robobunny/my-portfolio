// See: https://www.gatsbyjs.com/docs/node-apis/

const path = require('path');

// Create a page for each .md file in /src/posts with a path
// specified in the "path" property of the file's frontmatter

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve('src/templates/post.js')
  return graphql(`
    {
      allMarkdownRemark (filter: {frontmatter: {type: {eq:"blogPost"}}}) {
        edges {
          node {
            frontmatter {
              path
            }
            id
          }
        }
      }
    }
  `)
  .then(result => {
    if (result.errors) {
      throw result.errors
    }
    const posts = result.data.allMarkdownRemark.edges
    posts.forEach(({ node }) => {
      const postPath = path.join("/blog", path.resolve(node.frontmatter.path))
      createPage({
        path: postPath,
        component: blogPostTemplate,
        context: {
          id: node.id
        },
      });
    });
    createPage({
      path: "/about/resume",
      component: path.resolve(`./src/templates/resume.js`),
      context: {
        id: `10110`
      }
    });
  });
};

