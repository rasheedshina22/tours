import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"

const blog = props => {
  const { description, author, title } = props.data.site.siteMetadata
  return (
    <Layout>
      <div>
        <h5>description: {description} </h5>
        <h5>author: {author}</h5>
        <h5>title: {title}</h5>
      </div>
    </Layout>
  )
}

//we can only run page queries in pages but can pass the data to a component where it can be rendered. we dont have to always render it in the page where we are making the query
export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`

export default blog
