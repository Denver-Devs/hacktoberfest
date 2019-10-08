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
        <h3>&#x2F;&#x2F; Agenda</h3>
        <ul>
          <li>[6pm] Brief intro to Hacktoberfest</li>
          <li>
            [6:15 - 8:30pm] Hacking time! Submit PRs, help out your fellow devs,
            have fun!
          </li>
          <li>[8:30 - 9pm] Demos and show off time.</li>
        </ul>
        <h3>&#x2F;&#x2F; What's Hacktoberfest?</h3>
        <p>
          Hacktoberfest — brought to you by DigitalOcean in partnership with DEV
          — is a month-long celebration of open source software. Maintainers are
          invited to guide would-be contributors towards issues that will help
          move the project forward, and contributors get the opportunity to give
          back to both projects they like and others they've just discovered. No
          contribution is too small — bug fixes and documentation updates are
          valid ways of participating.
        </p>
        <p>
          Can't make it to this event? Hacktoberfest is virtual and open to
          participants from around the globe. Sign up to participate today.
        </p>
        <h3>&#x2F;&#x2F; Rules and prizes</h3>
        <p>
          First, sign up on the Hacktoberfest site at{" "}
          <a href="https:&#x2F;&#x2F;hacktoberfest.digitalocean.com">
            hacktoberfest.digitalocean.com
          </a>
          . To qualify for the official limited edition Hacktoberfest shirt, you
          must register and make four pull requests between October 1-31. Pull
          requests can be to any public repo on GitHub, not just the ones with
          issues labeled Hacktoberfest. If a maintainer reports your pull
          request as spam or behavior not in line with the project’s code of
          conduct, you will be ineligible to participate.
        </p>
        <p>
          Connect with other Hacktoberfest participants by using #hacktoberfest
          on your social media platform of choice.{" "}
        </p>

        <p>
          New to DigitalOcean? Receive USD $50 in infrastructure credit at{" "}
          <a href="https:&#x2F;&#x2F;do.co/hacktoberfest50">
            do.co/hacktoberfest50
          </a>
          .
        </p>

        <h3>&#x2F;&#x2F; Other Info</h3>
        <p>
          <strong>Will there be food / drinks?</strong> Thanks to the support of
          sponsors we'll be able to have some food brought in. Registration is
          important for how much we should order, so please register. Alcohol
          will not be provided.
        </p>
        <p>
          <strong>Will there be prizes?</strong> We're looking into it!
        </p>
        <p>
          <strong>Can I help? Or do you need sponsors?</strong> We're always
          open to folks helping out - please email{" "}
          <a href="mailto:info@denverdevs.org">info [at] denverdevs.org</a> to
          learn more.
        </p>
      </div>
    </Layout>
  )
}

export default IndexPage
