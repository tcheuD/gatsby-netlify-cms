import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

const Resize = styled.div`
  padding: ${props => props.padding || '0'};
  width: 100%;
`

export default function Image(props) {
  return (
    <Resize {...props}>
      <Img {...props} />
    </Resize>
  )
}
