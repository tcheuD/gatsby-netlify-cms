import React from 'react'
import styled from 'styled-components'
import { Container, useTheme } from '@material-ui/core'
import theme from '../gatsby-theme-material-ui-top-layout/theme'

const SectionStyle = styled.section`
  height: 100vh;
  background-color: ${props => props.backgroundColor};
  ${theme.breakpoints.down('md')} {
    height: auto;
  }
`

const Section = ({ children, backgroundColor, id = '' }) => {
  const theme = useTheme()

  return (
    <SectionStyle
      id={id}
      backgroundColor={
        backgroundColor ? backgroundColor : theme.palette.primary.main
      }
    >
      {children}
    </SectionStyle>
  )
}

export default Section
