// See: https://www.gatsbyjs.com/docs/node-apis/

const path = require('path');

// Create a page for each .md file in /src/posts with a path
// specified in the "path" property of the file's frontmatter

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions 
  return graphql(`
    {
      blogPosts: allFile (filter: {
        relativePath: {glob: "blog/posts/*"}
      }) {
        edges {
          node {
            childMarkdownRemark {
              frontmatter {
                isDraft
                path
              }
              id
            }
          }
        }
      }
      projects: allFile (filter: {
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
    const posts = result.data.blogPosts.edges
    posts.forEach(({ node: post }) => {
      const isDraft = post.childMarkdownRemark.frontmatter.isDraft
      const postPath = isDraft ? 
        path.join("/blog/draft", path.resolve(post.childMarkdownRemark.frontmatter.path)) : 
        path.join("/blog", path.resolve(post.childMarkdownRemark.frontmatter.path));
      console.log(`building ${isDraft ? "draft" : "blog post"}: `, postPath)
      createPage({
        path: postPath,
        component: path.resolve('src/templates/post.js'),
        context: {
          id: post.childMarkdownRemark.id
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

