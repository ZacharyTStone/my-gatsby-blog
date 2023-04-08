import * as React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

interface SiteMetadata {
  title: string
  description: string
}

interface Site {
  siteMetadata: SiteMetadata
}

interface Data {
  site: Site
}

interface MetaItem {
  name?: string
  content: string
  property?: string
}

interface SeoProps {
  description?: string
  lang?: string
  meta?: MetaItem[]
  title: string
}

interface StaticQueryData {
  site: {
    siteMetadata: {
      title: string
      description: string
    }
  }
}

const Seo: React.FC<SeoProps> = ({
  description = "",
  lang = "en",
  meta = [],
  title,
}) => {
  const { site } = useStaticQuery<StaticQueryData>(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const defaultTitle = site.siteMetadata?.title

  const allMeta = [
    {
      name: "description",
      content: metaDescription,
    },
    {
      property: "og:title",
      content: title,
    },
    {
      property: "og:description",
      content: metaDescription,
    },
    {
      property: "og:type",
      content: "website",
    },
    ...meta,
  ]

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      meta={allMeta}
    />
  )
}

export default Seo
