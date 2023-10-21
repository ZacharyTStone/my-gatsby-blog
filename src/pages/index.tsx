import React from "react"
import { Link, graphql } from "gatsby"
import { BsFillGrid1X2Fill } from "react-icons/bs"
import styled from "styled-components"

import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Ads from "../components/Ads"
import { kebabCase } from "lodash"
import { IconContext } from "react-icons"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <p>No blog posts found.</p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <Bio />
      <div className="layout">
        <div className="tags">
          <h1 className="main-heading">Tags</h1>
          <TagList className="tag-list">
            {data.allMarkdownRemark.group.map(tag => (
              <li key={tag.fieldValue}>
                <TagLink to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue} ({tag.totalCount})
                </TagLink>
              </li>
            ))}
          </TagList>
          <GalleryLink to="/gallery">
            <IconContext.Provider value={{ color: "var(--primary-color)" }}>
              <GalleryIcon size={44} />
            </IconContext.Provider>
            <GalleryText>Gallery</GalleryText>
          </GalleryLink>
          <Ads />
        </div>
        <main>
          <h1 className="main-heading">Recent Posts</h1>
          <ol style={{ listStyle: `none` }}>
            {posts.slice(0, 5).map(post => {
              const title = post.frontmatter.title || post.fields.slug

              return (
                <li key={post.fields.slug}>
                  <article
                    className="post-list-item"
                    itemScope
                    itemType="http://schema.org/Article"
                  >
                    <header>
                      <h2>
                        <Link to={post.fields.slug} itemProp="url">
                          <span itemProp="headline">{title}</span>
                        </Link>
                      </h2>
                      <small>{post.frontmatter.date}</small>
                    </header>
                    <section>
                      <p
                        dangerouslySetInnerHTML={{
                          __html: post.frontmatter.description || post.excerpt,
                        }}
                        itemProp="description"
                      />
                    </section>
                    <div style={{ margin: "10px" }}>
                      &#123;
                      {post.frontmatter.tags.map(tag => (
                        <Link key={tag} to={`/tags/${kebabCase(tag)}/`}>
                          <StyledButton>{tag}</StyledButton>
                        </Link>
                      ))}
                      &#125;
                    </div>
                  </article>
                </li>
              )
            })}
          </ol>
        </main>
      </div>
      <div>
        <h2 style={{ textAlign: "center" }}>
          <span itemProp="headline">
            <Link to="/all-posts">All Posts</Link>
          </span>
        </h2>
      </div>
      <div className="gallery-link">
        <h2 style={{ textAlign: "center" }}>
          <span itemProp="headline">
            <Link to="/gallery/">Image Gallery</Link>
          </span>
        </h2>
      </div>
    </Layout>
  )
}

// Styled components
const TagList = styled.ul`
  list-style: none;
`

const TagLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`

const GalleryLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
`

const GalleryIcon = styled(BsFillGrid1X2Fill)`
  color: var(--primary-color);
  margin-right: 8px;
`

const GalleryText = styled.span`
  font-size: 2rem;
  font-weight: bold;
  color: black;
`

const StyledButton = styled.button`
  background-color: #f5f5f5;
  border: none;
  color: #000;
  padding: 5px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
`

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          tags
        }
      }
    }
  }
`
