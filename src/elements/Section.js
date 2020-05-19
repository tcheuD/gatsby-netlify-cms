import React from 'react'
import styled from 'styled-components'
import { Container, useTheme } from '@material-ui/core'

const SectionStyle = styled.section`
  height: 100vh;
  background-color: ${props => props.backgroundColor};
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
      <Container>{children}</Container>
    </SectionStyle>
  )
}

export default Section
