import styled from 'styled-components'
import { Link } from 'gatsby-plugin-intl'

const PinkLink = styled(Link)`
  text-decoration: none;
  padding: 5px 10px;
  margin: 10px;

  border: 2px solid #e64663;
  box-sizing: border-box;
  border-radius: 15px;
  color: #e64663;
  background-color: 'transparent';

  width: fit-content(20em);
  white-space: nowrap;
  left: 503px;
  top: 404px;

  font-family: Montserrat;
  font-weight: 600;
  line-height: 20px;

  :hover {
    background-color: #e64663;
    color: white;
  }
`

export default PinkLink
