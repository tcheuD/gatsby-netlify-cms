// Component image + subtitle + body
import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Image from './Image'

export default function Feature(props) {
  return (
    <Grid
      container
      item
      xs={6}
      md={3}
      alignItems="center"
      justify="center"
      direction="column"
    >
      <Image padding="0 30%" fluid={props.fluid} alt={props.alt} />
      <Typography>Mon test</Typography>
    </Grid>
  )
}
