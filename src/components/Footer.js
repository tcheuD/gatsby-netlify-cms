import React from 'react'

import { useIntl } from 'gatsby-plugin-intl'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import styled from 'styled-components'
import { Divider, Container } from '@material-ui/core'

const MyFooter = styled.footer`
  background-color: #3a3f45;
`

const Footer = () => {
  const intl = useIntl()
  const data = useStaticQuery(graphql`
    query {
      whiteLogo: file(relativePath: { eq: "logo-white.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <MyFooter>
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          <Grid item xs={6} md={3}>
            <Typography variant="body1" color="textSecondary">
              ENTREPRISE
            </Typography>
            <Divider />
            <Typography variant="body1" color="textSecondary">
              À propos
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Partenaires
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Centre de presse
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="body1" color="textSecondary">
              OUTILS
            </Typography>
            <Divider />
            <Typography variant="body1" color="textSecondary">
              Conditions de privacite
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Mentions Legales
            </Typography>
            <Typography variant="body1" color="textSecondary">
              Sitemap
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Typography variant="body1" color="textSecondary">
              CONTACT
            </Typography>
            <Divider />
            <Typography variant="body1" color="textSecondary">
              6 rue de Notre Dame de Nazareth, 75003 Paris, France
            </Typography>
            <Typography variant="body1" color="textSecondary">
              01 83 62 09 28
            </Typography>
            <Typography variant="body1" color="textSecondary">
              contact@testwe.eu
            </Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Img
              fixed={data.whiteLogo.childImageSharp.fixed}
              alt="Gatsby Docs are awesome"
            />
            <Typography variant="body1" color="textSecondary">
              6 rue de Notre Dame de Nazareth, 75003 Paris, France
            </Typography>
            <Typography variant="body1" color="textSecondary">
              01 83 62 09 28
            </Typography>
            <Typography variant="body1" color="textSecondary">
              contact@testwe.eu
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </MyFooter>
  )
}

export default Footer
