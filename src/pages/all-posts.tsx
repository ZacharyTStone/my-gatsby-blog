import * as React from "react"
import * as PropTypes from "prop-types"

// Components
import { Helmet } from "react-helmet"
import { Link, graphql } from "gatsby"

const AllPostsPage = ({
  data: {
    allMarkdownRemark: { edges },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <div>
    <Helmet title={title} />
    <div className="full-viewport-div">
      <h1>All Posts</h1>
      <ul>
        {edges.map(({ node }) => (
          <li key={node.id}>
            <Link to={node.fields.slug}>
              {node.frontmatter.title} - {node.frontmatter.date}
            </Link>
          </li>
        ))}
      </ul>
      <Link to={`/`}>Back Home</Link>
    </div>
  </div>
)

AllPostsPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            id: PropTypes.string.isRequired,
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              date: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    }),
  }),
}

export default AllPostsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
