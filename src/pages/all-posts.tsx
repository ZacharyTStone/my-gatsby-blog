import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

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
    <FullViewportDiv>
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
    </FullViewportDiv>
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

const FullViewportDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 20px;
  height: 100vh;
  width: 100vw;
`

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