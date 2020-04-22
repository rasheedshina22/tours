import React from "react"
import { StaticQuery, graphql } from "gatsby"

const getSitedData = graphql`
  query SecondQuery {
    site {
      siteMetadata {
        title
        description
        author
        data
      }
    }
  }
`

const RegularHeader = () => {
  return (
    <StaticQuery
      query={getSitedData}
      render={data => {
        const { description, author, title } = data.site.siteMetadata
        return (
          <div>
            <h5>name: {author}</h5>
            <h5>title: {title}</h5>
            <h5>description:{description}</h5>
          </div>
        )
      }}
    />
  )
}

export default RegularHeader
