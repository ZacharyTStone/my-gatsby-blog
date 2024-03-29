import { Link, graphql } from "gatsby"
import * as React from "react"
import { BsFillGrid1X2Fill } from "react-icons/bs"

import { kebabCase } from "lodash"
import { IconContext } from "react-icons"
import Ads from "../components/Ads"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Seo from "../components/seo"

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
          <ul className="tag-list">
            {data.allMarkdownRemark.group.map(tag => (
              <li key={tag.fieldValue}>
                <Link
                  className="tag-link"
                  to={`/tags/${kebabCase(tag.fieldValue)}/`}
                >
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              </li>
            ))}
          </ul>
          <Link className="gallery-link" to="/gallery">
            <IconContext.Provider value={{ color: "var(--primary-color)" }}>
              <BsFillGrid1X2Fill size={44} className="gallery-icon" />
            </IconContext.Provider>
            <span className="gallery-text">Gallery</span>
          </Link>
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
                          <button className="styled-button">{tag}</button>
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
    </Layout>
  )
}

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
