import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import MenuIcon from '@material-ui/icons/Menu'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { Link } from 'gatsby-plugin-intl'
import {
  Typography,
  MenuItem,
  Menu,
  IconButton,
  AppBar,
  Toolbar,
  makeStyles,
  useTheme,
  Grid,
} from '@material-ui/core'

const MyLink = styled(Link)`
  color: white;
  text-decoration: none;
  margin-right: 2rem;
  border: 2px solid ${props => (props.demo ? '#e64663' : 'transparent')};
  border-radius: 30px;
  padding: ${props => (props.demo ? '0px 15px 0px 15px' : '0px')};
  cursor: pointer;
  transition: all 20ms ease-in;
  :hover {
    color: ${props => (props.demo ? 'white' : 'black')};
    background-color: ${props => (props.demo ? '#e64663' : 'transparent')};
  }
`
const NavTypography = styled(Typography)`
  font-weight: 500;
`
const useStyles = makeStyles(theme => ({
  root: {
    // flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    // flexGrow: 1,
  },
}))

// Header
export default function Header(props) {
  const classes = useStyles()

  // To handle resize
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('sm'))

  const data = useStaticQuery(graphql`
    query {
      testWeLogo: file(relativePath: { eq: "tw_logo.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            style={{ display: matches ? 'block' : 'none' }}
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Grid container alignItems="center" className={classes.title}>
            <Grid item xs={1}>
              <Img
                fluid={data.testWeLogo.childImageSharp.fluid}
                alt="logo TestWe"
              />
            </Grid>
            <Grid item xs style={{ display: matches ? 'none' : 'block' }}>
              <Grid container justify="flex-end" className={classes.title}>
                <MyLink to="#">
                  <NavTypography variant="body1">Software</NavTypography>
                </MyLink>
                <MyLink to="#">
                  <NavTypography variant="body1">Why?</NavTypography>
                </MyLink>
                <MyLink
                  activeStyle={{ color: 'white' }}
                  to="#"
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <NavTypography variant="body1">For who?</NavTypography>
                </MyLink>
                <Menu
                  style={{ marginTop: '3%' }}
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                  <MenuItem onClick={handleClose}>Logout</MenuItem>
                </Menu>
                <MyLink to="#">
                  <NavTypography variant="body1">Blog</NavTypography>
                </MyLink>
                <MyLink to="#">
                  <NavTypography variant="body1">Support</NavTypography>
                </MyLink>
                <MyLink demo to="/demo">
                  <NavTypography variant="body1">Demo</NavTypography>
                </MyLink>
                <MyLink to="https://app.testwe.eu/en/login">
                  <NavTypography variant="body1">Log in</NavTypography>
                </MyLink>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
