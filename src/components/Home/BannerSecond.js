import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import { useIntl } from 'gatsby-plugin-intl'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'

import { PinkLink, Image, Section } from '../../elements'
import { Features } from '../../components/Home'

const BannerSecond = () => {
  const intl = useIntl()
  const data = useStaticQuery(graphql`
    query {
      defaultimage: file(relativePath: { eq: "Home/logiciel-e-learning.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Grid container spacing={3} alignItems="center">
      <Grid item xs={12} md={6}>
        <Image
          padding="2% 5%" // TODO: Fix padding
          fluid={data.defaultimage.childImageSharp.fluid}
          alt="logo TestWe"
        />
      </Grid>
      <Grid container item xs={12} md={6} alignItems="center" justify="center">
        <Typography variant="h2">
          {intl.formatMessage({ id: 'home.h2' })}
        </Typography>
        <Typography variant="subtitle1">
          {intl.formatMessage({ id: 'home.bannerBody' })}
        </Typography>
        <PinkLink to="/">
          <Typography>{intl.formatMessage({ id: 'home.demo' })}</Typography>
        </PinkLink>
      </Grid>
    </Grid>
  )
}

export default BannerSecond
