import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Masthead from "../components/masthead"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Masthead />

    <div>
      <h3>&#x2F;&#x2F; You have Registered</h3>
      <p>
        Thank you for registering! We look forward to seeing you on the 10th.
      </p>
      <p>
        Need to register someone else?{" "}
        <Link to="/">Head back to the landing page -></Link>
      </p>
    </div>
  </Layout>
)

export default IndexPage
