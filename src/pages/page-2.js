import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>Indonesia Age</h1>
    <hr></hr>
    <h1>Digital Marketing</h1>
      <ul>
        <li>記事のリンク</li>
      </ul>
    <hr></hr>
    <h1>SmartNode</h1>
    <hr></hr>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
