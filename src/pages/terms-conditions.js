import React from 'react'
import { Layout, SEO } from '../components'
import { Grid, Typography } from '@material-ui/core'
import { useIntl } from 'gatsby-plugin-intl'
import styled from 'styled-components'

const PinkTypography = styled(Typography)`
  color: #e54763;
  margin-bottom: 16px;
`

const TermsConditions = () => {
  const intl = useIntl()
  return (
    <Layout>
      <SEO title="hola" />
      <Grid container spacing={3} alignItems="center">
        <Grid item container sm={12}>
          <Typography variant="h1">
            {intl.formatMessage({ id: 'terms-conditions.title' })}
          </Typography>
        </Grid>
        <Grid item container sm={12}>
          <PinkTypography variant="h3">
            {intl.formatMessage({ id: 'terms-conditions.terms' })}
          </PinkTypography>
          <Grid item container sm={12}>
            <Typography variant="body1">
              {intl.formatMessage({ id: 'terms-conditions.terms-body' })}
            </Typography>
          </Grid>
        </Grid>
        <Grid item container sm={12}>
          <PinkTypography variant="h3">
            {intl.formatMessage({ id: 'terms-conditions.intellectual' })}
          </PinkTypography>
          <Grid item container sm={12}>
            <Typography variant="body1">
              {intl.formatMessage({
                id: 'terms-conditions.intellectual-body',
              })}
            </Typography>
          </Grid>
        </Grid>
        <Grid item container sm={12}>
          <PinkTypography variant="h3">
            {intl.formatMessage({ id: 'terms-conditions.confidentiality' })}
          </PinkTypography>
          <Grid item container sm={12}>
            <Typography variant="body1">
              {intl.formatMessage({
                id: 'terms-conditions.confidentiality-body',
              })}
            </Typography>
          </Grid>
        </Grid>
        <Grid item container sm={12}>
          <PinkTypography variant="h3">
            {intl.formatMessage({ id: 'terms-conditions.applicable' })}
          </PinkTypography>
          <Grid item container sm={12}>
            <Typography variant="body1">
              {intl.formatMessage({ id: 'terms-conditions.applicable-body' })}
            </Typography>
          </Grid>
        </Grid>
        <Grid item container sm={12}>
          <PinkTypography variant="h3">
            {intl.formatMessage({ id: 'terms-conditions.modifications' })}
          </PinkTypography>
          <Grid item container sm={12}>
            <Typography variant="body1">
              {intl.formatMessage({
                id: 'terms-conditions.modifications-body',
              })}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Layout>
  )
}

export default TermsConditions
