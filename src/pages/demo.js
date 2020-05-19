import React from 'react'

import { Layout, SEO } from '../components'
import { PinkPaper } from '../elements'
import { Grid, Typography } from '@material-ui/core'
import DemoForm from '../components/Demo/DemoForm'

const DemoPage = () => {
  return (
    <Layout>
      <SEO title="hola" />
      <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h2">Avantages</Typography>
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
