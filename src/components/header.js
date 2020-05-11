import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Grid from '@material-ui/core/Grid'
import MenuItem from '@material-ui/core/MenuItem'
import { useTheme } from '@material-ui/core/styles'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import Grow from '@material-ui/core/Grow'
import Paper from '@material-ui/core/Paper'
import Popper from '@material-ui/core/Popper'
import MenuList from '@material-ui/core/MenuList'
import ClickAwayListener from '@material-ui/core/ClickAwayListener'

import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import Typography from '@material-ui/core/Typography'

const MyLink = styled(Link)`
  color: rgb(87, 86, 86);
  text-decoration: none;
  margin-right: 2rem;
  border: 2px solid ${props => (props.demo ? '#e64663' : 'transparent')};
  border-radius: 200px 200px / 200px 200px;
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
          fluid(maxWidth: 50, pngQuality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  // Dropddown
  const [open, setOpen] = React.useState(false)
  const anchorRef = React.useRef(null)

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen)
  }

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return
    }

    setOpen(false)
  }

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault()
      setOpen(false)
    }
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
                  <NavTypography variant="body2">How it works</NavTypography>
                </MyLink>
                <MyLink
                  to="#"
                  ref={anchorRef}
                  aria-controls={open ? 'menu-list-grow' : undefined}
                  aria-haspopup="true"
                  // onClick={handleClick}
                  onMouseEnter={handleToggle}
                  // onMouseOver={handleClick}
                  onMouseLeave={handleToggle}
                >
                  <NavTypography variant="body2">Ressources</NavTypography>
                </MyLink>
                <Popper
                  open={open}
                  anchorEl={anchorRef.current}
                  role={undefined}
                  transition
                  disablePortal
                >
                  {({ TransitionProps, placement }) => (
                    <Grow
                      {...TransitionProps}
                      style={{
                        transformOrigin:
                          placement === 'bottom'
                            ? 'center top'
                            : 'center bottom',
                      }}
                    >
                      <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                          <MenuList
                            autoFocusItem={open}
                            id="menu-list-grow"
                            onKeyDown={handleListKeyDown}
                          >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>
                              My account
                            </MenuItem>
                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                          </MenuList>
                        </ClickAwayListener>
                      </Paper>
                    </Grow>
                  )}
                </Popper>
                <MyLink to="#">
                  <NavTypography variant="body2">About us</NavTypography>
                </MyLink>
                <MyLink demo to="demo">
                  <NavTypography variant="body2">Demo</NavTypography>
                </MyLink>
                <MyLink to="#">
                  <NavTypography variant="body2">Language</NavTypography>
                </MyLink>
                <MyLink to="https://app.testwe.eu/en/login">
                  <NavTypography variant="body2">Log in</NavTypography>
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
