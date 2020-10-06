// See: https://www.gatsbyjs.com/docs/node-apis/

const path = require('path');

// Create a page for each .md file in /src/posts with a path
// specified in the "path" property of the file's frontmatter

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions 
  return graphql(`
    {
      blogPosts: allMarkdownRemark (filter: {frontmatter: {type: {eq:"blogPost"}}}) {
        edges {
          node {
            frontmatter {
              path
            }
            id
          }
        }
      }
      projects: allFile(filter: {
        relativePath: {glob: "projects/*"}, 
        childMarkdownRemark: {
          frontmatter: {
            hasOwnPage: {eq: true}
          }
        }
      }) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                path
                img
              }
            }
          }
        }
      }
    }
  `)
  .then(result => {
    if (result.errors) {
      throw result.errors
    }
    const blogPostTemplate = path.resolve('src/templates/post.js')
    const posts = result.data.blogPosts.edges
    posts.forEach(({ node }) => {
      const postPath = path.join("/blog", path.resolve(node.frontmatter.path))
      console.log("building blog post: ", postPath)
      createPage({
        path: postPath,
        component: blogPostTemplate,
        context: {
          id: node.id
        },
      });
    });
    const projectTemplate = path.resolve('src/templates/project.js')
    const projects = result.data.projects.edges
    projects.forEach(({ node }) => {
      const projectPath = path.join("/projects", path.resolve(node.childMarkdownRemark.frontmatter.path))
      console.log("building project page: ", projectPath)
      const imageSource = node.childMarkdownRemark.frontmatter.img
      createPage({
        path: projectPath,
        component: projectTemplate,
        context: {
          imageSource: imageSource,
        }
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

