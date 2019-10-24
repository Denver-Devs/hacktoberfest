import React, { useEffect, useState } from "react"
import { fetchUsers } from "../ClientApi"
import Layout from "../components/layout"
import Masthead from "../components/masthead"
import RegistrationForm from "../components/registrationForm"
import SEO from "../components/seo"
import SponsorBlock from "../components/sponsors"
const IndexPage = () => {
  const [no_of_users, setUserCount] = useState(0)
  useEffect(() => {
    fetchUsers()
      .then(res => {
        setUserCount(res.data.length)
      })
      .catch(err => {
        console.log("ERROR", err)
      })
  })
  return (
    <Layout>
      <SEO title="Home" />
      <Masthead />
      <RegistrationForm userCount={no_of_users} />
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
