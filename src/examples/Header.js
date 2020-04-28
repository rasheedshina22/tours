import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getSitedData = graphql`
  query FirstQuery {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

const Header = () => {
  const data = useStaticQuery(getSitedData)

  //we can set up an external variable for this
  //   const data = useStaticQuery(graphql`
  //   query {
  //       site {
  //         siteMetadata {
  //           title
  //           description
  //           author
  //           data
  //         }
  //       }
  //     }
  //   `)

  const { title, author, description } = data.site.siteMetadata
  return (
    <div>
      <h1>title: {title}</h1>
      <h1>author: {author}</h1>
      <h1>description:{description}</h1>
    </div>
  )
}

export default Header
