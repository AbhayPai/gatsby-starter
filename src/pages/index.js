import { graphql } from "gatsby"
import React from "react"
import LayoutPage from "../components/layouts/LayoutPage"

export default function Home({ data }) {
  // `data` variable is props which is coming from graphql query
  console.log(data)

  // Destructuring `title` and `description` from props `data`
  const { description } = data.site.siteMetadata
  console.log(description)

  return (
    <>
      <LayoutPage>
        <div>
          <h1>Home!</h1>
        </div>
      </LayoutPage>
    </>
  )
}

// Using graphql page query
export const queryGetSiteMetadata = graphql`
  query GetSiteDescription {
    site {
      siteMetadata {
        description
      }
    }
  }
`
