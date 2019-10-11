import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Masthead from "../components/masthead"
import RegistrationForm from "../components/registrationForm"
import SponsorBlock from "../components/sponsors"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Masthead />
    <SponsorBlock />

    <div className="info">
      <h3>Notes for next time:</h3>
      <ul>
        <li>
          Visit the venue well in advance and learn the layout, figure out
          directions on how to get there. Our venue was actually a secure
          building after 6 - which made it a bit difficult to get people in.
        </li>
        <li>
          If the building layout is complex get some wayfinding signs. Bonus:
          build an Event Kit with these in them!
        </li>
        <li>
          People drank way more sparkling water than they did anything else.
        </li>
        <li>
          Have a plan for dealing with any excess: leftover food, drinks, swag.
        </li>
      </ul>
    </div>
  </Layout>
)

export default IndexPage
