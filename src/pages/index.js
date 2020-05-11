import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'
import { useIntl } from 'gatsby-plugin-intl'
import { Layout, SEO } from '../components'
import { Header, Applications, Features } from '../components/Home'

import styled from 'styled-components'

// const Header = styled.div`
//   position: relative;
//   height: 300px;
//   background-image: linear-gradient(#ff9d2f, #ff6126);
// `

// const Svg = styled.svg`
//   position: absolute;
//   bottom: 0;
//   width: 100%;
//   height: 100px;

//   @media (max-width: 699px) {
//     .svg--lg {
//       display: none;
//     }
//   }

//   @media (min-width: 700px) {
//     .svg--sm {
//       display: none;
//     }
// `

const IndexPage = () => {
  const intl = useIntl()
  const data = useStaticQuery(graphql`
    query {
      defaultimage: file(relativePath: { eq: "defaultimage.png" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: 'title' })} />
      {/* <Header>
        <Svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <polygon
            class="svg--sm"
            fill="white"
            points="0,0 30,100 65,21 90,100 100,75 100,100 0,100"
          />
          <polygon
            class="svg--lg"
            fill="white"
            points="0,0 15,100 33,21 45,100 50,75 55,100 72,20 85,100 95,50 100,80 100,100 0,100"
          />
        </Svg>
        TEST
      </Header> */}
      <Header />
      <Features />
      <Applications />
    </Layout>
  )
}

export default IndexPage
