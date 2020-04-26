import React from "react"
import Layout from "../components/Layout"
import StyledHero from "../components/StyledHero"
import Tours from "../components/Tours/Tours"
import { graphql } from "gatsby"

const tours = props => {
  return (
    <Layout>
      <StyledHero img={props.data.defaultBcg.childImageSharp.fluid} />

      <Tours />
    </Layout>
  )
}
export default tours

export const query = graphql`
  query {
    defaultBcg: file(relativePath: { eq: "defaultBcg.jpeg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`
