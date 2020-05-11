import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import { useIntl } from 'gatsby-plugin-intl'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { PinkPaper, Image } from '../../elements'

const Applications = () => {
  const intl = useIntl()
  const data = useStaticQuery(graphql`
    query {
      defaultimage: file(relativePath: { eq: "defaultimage.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Grid container spacing={1} alignItems="center">
      <Grid item xs={12}>
        <PinkPaper>
          <Grid container space={3}>
            <Grid item xs={12}>
              <Typography variant="h2">Pour qui?</Typography>
            </Grid>
            <Grid
              container
              item
              xs={6}
              md={3}
              alignItems="center"
              justify="center"
              direction="column"
            >
              <Image
                padding="0 30%"
                fluid={data.defaultimage.childImageSharp.fluid}
                alt="logo TestWe"
              />
              <Typography variant="subtitle1">
                Enseignement Superieur
              </Typography>
            </Grid>
            <Grid
              container
              item
              xs={6}
              md={3}
              alignItems="center"
              justify="center"
              direction="column"
            >
              <Image
                padding="0 30%"
                fluid={data.defaultimage.childImageSharp.fluid}
                alt="logo TestWe"
              />
              <Typography variant="subtitle1">Centre de Formation</Typography>
            </Grid>
            <Grid
              container
              item
              xs={6}
              md={3}
              alignItems="center"
              justify="center"
              direction="column"
            >
              <Image
                padding="0 30%"
                fluid={data.defaultimage.childImageSharp.fluid}
                alt="logo TestWe"
              />
              <Typography variant="subtitle1">Recruitement</Typography>
            </Grid>
            <Grid
              container
              item
              xs={6}
              md={3}
              alignItems="center"
              justify="center"
              direction="column"
            >
              <Image
                padding="0 30%"
                fluid={data.defaultimage.childImageSharp.fluid}
                alt="logo TestWe"
              />
              <Typography variant="subtitle1">Concours d'entree</Typography>
            </Grid>
          </Grid>
        </PinkPaper>
      </Grid>
    </Grid>
  )
}

export default Applications
