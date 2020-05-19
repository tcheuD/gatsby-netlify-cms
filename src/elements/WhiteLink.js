import styled from 'styled-components'
import { Link } from 'gatsby-plugin-intl'

const WhiteLink = styled(Link)`
  text-decoration: none;
  background-color: transparent;
  text-align: center;
  padding: 3px 10px;
  margin-top: 20px;
  margin-bottom: 40px;
  width: 300px; 
  height: 30px;
  left: 789px;
  top: 596px;
  font-weight: 500;
  font-size: 16px;
  color: #ffffff;
  border: 1px solid white;
  border-radius: 15px;
  transition: transform .2s;

  :hover {
    background: rgb(255, 255, 255) transparent;
    background-color: rgba(255, 255, 255, 0.3);
    color: #ffffff;
    transform: scale(1.05);
    box-shadow:  0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`

export default WhiteLink
