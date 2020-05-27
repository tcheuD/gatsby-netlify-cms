import React from 'react'

import { Layout, SEO } from '../components'
import { PinkPaper, Video } from '../elements'
import { Grid, Typography } from '@material-ui/core'
import DemoForm from '../components/Demo/DemoForm'

const DemoPage = () => {
  return (
    <Layout>
      <SEO title="hola" />
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h2">Avantages</Typography>
          <Video
            videoSrcURL="https://www.youtube.com/embed/pna_yMtLrVY"
            videoTitle="Discover TestWe"
          />
          <Typography variant="body1">
            Vous êtes un étudiant et vous avez une question ?  Appelez-nous au
            +33 (0)1 83 62 09 28 ou envoyez-nous un email à support@testwe.eu
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <PinkPaper>
            <DemoForm />
          </PinkPaper>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default DemoPage
