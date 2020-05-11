import styled from 'styled-components'
import { Link } from 'gatsby-plugin-intl'

const PinkLink = styled(Link)`
  text-decoration: none;
  background-color: #ffffff;
  padding: 5px 10px;
  margin: 10px;
  font-size: 16px;
  color: #e64663;
  border: 2px solid transparent;
  border-radius: 80px;
  background-image: linear-gradient(white, white),
    radial-gradient(circle at 100%, #6e357e 0%, #d82644 100%);
  background-origin: border-box;
  background-clip: padding-box, border-box;
  transition: all 10ms ease-in;
  :hover {
    background-image: linear-gradient(to right, #6e357e, #d82644 100%);
    background-color: #e64663;
    color: white;

    p {
      color: white;
      background-image: linear-gradient(to right, #6e357e, #d82644 100%);
      -webkit-text-fill-color: white;
      -moz-text-fill-color: white;
    }
  }

  & p {
    background-image: radial-gradient(circle at 100%, #6e357e 0%, #d82644 100%);
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    -webkit-text-fill-color: transparent;
    -moz-text-fill-color: transparent;
    background-color: #f3ec78;
  }
`

export default PinkLink
