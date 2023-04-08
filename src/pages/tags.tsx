import * as React from "react"
import styled from "styled-components"
import { Link, graphql, PageProps } from "gatsby"

interface Node {
  fields: {
    slug: string
  }
  frontmatter: {
    title: string
  }
}

interface AllMarkdownRemark {
  totalCount: number
  edges: {
    node: Node
  }[]
}

interface Data {
  allMarkdownRemark: AllMarkdownRemark
}

interface PageContext {
  tag: string
}

type TagsProps = PageProps<Data, PageContext>

const Tags = ({ pageContext, data }: TagsProps) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`

  return (
    <Container>
      <h1>{tagHeader}</h1>
      <TagsList>
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title } = node.frontmatter
          return (
            <TagItem key={slug}>
              <Link to={slug}>{title}</Link>
            </TagItem>
          )
        })}
      </TagsList>
      <Link to="/tags">All tags</Link>
    </Container>
  )
}

export default Tags

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  padding: 20px;
  height: 100vh;
  width: 100vw;
`

const TagsList = styled.ul`
  list-style: none;
  padding: 0;
`

const TagItem = styled.li`
  margin-bottom: 10px;
`

export const pageQuery = graphql`
  query ($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
