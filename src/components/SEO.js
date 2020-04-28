import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphgql } from "gatsby"

const getData = graphql`
  query {
    site {
      siteMetadata {
        siteTitle: title
        siteDesc: description
        author
        siteUrl
        image
        twitterusername
      }
    }
  }
`

const SEO = ({ title, description }) => {
  const { site } = useStaticQuery(getData)
  const {
    siteDesc,
    siteTitle,
    siteUrl,
    image,
    twitterusername,
  } = site.siteMetadata
  return (
    <Helmet htmlAttributes={{ lang: "en" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={description || siteDesc} />
      <meta name="image" content={image} />
      {/* twitter card */}

      <meta name="twittercard" content="summary_large_image" />
      <meta name="twitter:creator" content={twitterusername} />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="image" content={`${siteUrl}${image}`} />
    </Helmet>
  )
}

export default SEO
