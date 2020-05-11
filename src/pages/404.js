import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import { Layout, SEO } from '../components'
import styled from 'styled-components'
import Grid from '@material-ui/core/Grid'

const NotFoundImg = styled(Img)`
  width: 70%;
`
export default function NotFoundPage() {
  const data = useStaticQuery(graphql`
    query {
      notFound: file(
        relativePath: { eq: "marginalia-delete-confirmation.png" }
      ) {
        childImageSharp {
          fluid(pngQuality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title="404: Not found" />
      <Grid container alignItems="center">
        <Grid item xs={12}>
          <h1>404 NOT FOUND</h1>
        </Grid>
        <Grid item xs={9}>
          <NotFoundImg fluid={data.notFound.childImageSharp.fluid} />
        </Grid>
        <Grid item xs={3}>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </Grid>
      </Grid>
    </Layout>
  )
}

// const NotFoundPage = () => (
//   <Layout>
//     <SEO title="404: Not found" />
//     <h1>NOT FOUND</h1>
//     <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
//   </Layout>
// )

// export default NotFoundPage
