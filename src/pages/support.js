import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import DescriptionIcon from '@material-ui/icons/Description'
import { Layout, SEO } from '../components'
import { Privacy, Students, Teachers } from '../components/Support'
import { Grid, Typography, Tab, Tabs, Paper } from '@material-ui/core'
import PropTypes from 'prop-types'
import { useIntl } from 'gatsby-plugin-intl'
import styled from 'styled-components'
import { PrivacyIcon, TeachersIcon } from '../elements/SVGS'

const MyPaper = styled(Paper)`
  box-shadow: none;
`

const TabPanel = props => {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && <div>{children}</div>}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
})

export default function Support() {
  const intl = useIntl()
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Layout>
      <Grid container direction="row" justify="flex-start" alignItems="center">
        <Grid item container sm={12}>
          <Grid item sm={2}>
            <Typography variant="h1">Support</Typography>
          </Grid>
          <Grid item sm={10}>
            <Typography variant="body1">Text</Typography>
          </Grid>
          <Grid item sm={12}>
            <Typography> Text </Typography>
          </Grid>
          <MyPaper square className={classes.root} elevation={0}>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="fullWidth"
              // indicatorColor="inherit"
              textColor="secondary"
              aria-label="icon label tabs example"
            >
              <Tab
                icon={<PrivacyIcon fontSize="large" />}
                label={intl.formatMessage({
                  id: 'support.privacy.personal-data',
                })}
              />
              <Tab
                icon={<TeachersIcon fontSize="large" />}
                label={intl.formatMessage({
                  id: 'support.teachers.support',
                })}
              />
              <Tab
                icon={<DescriptionIcon />}
                label={intl.formatMessage({
                  id: 'support.students.support',
                })}
              />
            </Tabs>
            <TabPanel value={value} index={0}>
              <Privacy />
            </TabPanel>
            <TabPanel value={value} index={1}>
              <Teachers />
            </TabPanel>
            <TabPanel value={value} index={2}>
              <Students />
            </TabPanel>
          </MyPaper>
        </Grid>
      </Grid>
    </Layout>
  )
}
