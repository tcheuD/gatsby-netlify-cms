import React from 'react'
import { Layout } from '../components'
import { Breadcrumb } from 'gatsby-plugin-breadcrumb'
import { useIntl } from 'gatsby-plugin-intl'

const Contact = ({ location }) => {
  const intl = useIntl()
  return (
    <Layout>
      <div>
        <Breadcrumb
          location={location}
          crumbLabel={intl.formatMessage({ id: 'home.title' })}
        />
        <h1>About us</h1>
        <p>Get in touch</p>
      </div>
    </Layout>
  )
}

export default Contact
