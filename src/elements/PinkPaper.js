import Paper from '@material-ui/core/Paper'
import styled from 'styled-components'
import theme from '../gatsby-theme-material-ui-top-layout/theme'

// const PinkPaper = styled(Paper)`
//   background-image: ${theme.palette.primary.mainGradient};
//   color: ${theme.palette.primary.color};
//   border-radius: 0;
//   padding: 2%;
//   margin: 5% 0;
// `

const PinkPaper = styled(Paper)({
  color: 'primary',
  borderRadius: 0,
  padding: '2%',
  margin: '5% 0',
})

export default PinkPaper
