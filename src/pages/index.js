import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Greetings!</h1>
    <p>My username is e-barr.</p>
    <p>I look forward to freeCodeCamp's 2018 hackathon.</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
