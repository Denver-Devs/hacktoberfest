import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Masthead from "../components/masthead"
import RegistrationForm from "../components/registrationForm"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Masthead />
    <RegistrationForm />
    <div className="info">
      <h3>&#x2F;&#x2F; Agenda</h3>
      <ul>
        <li>[6pm] Brief intro to Hacktoberfest</li>
        <li>
          [6:15~ 8:30pm] Hacking time! Submit PR's, help out your fellow devs,
          have fun!
        </li>
        <li>[8:30 - 9pm] Demos and show off time.</li>
      </ul>
      <h3>&#x2F;&#x2F; What's Hacktoberfest?</h3>
      <p>
        Hacktoberfest — brought to you by DigitalOcean in partnership with DEV —
        is a month-long celebration of open source software. Maintainers are
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
        issues labeled Hacktoberfest. If a maintainer reports your pull request
        as spam or behavior not in line with the project’s code of conduct, you
        will be ineligible to participate.
      </p>
      <p>
        Connect with other Hacktoberfest participants by using #hacktoberfest on
        your social media platform of choice.{" "}
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
        <strong>Will there be food / drinks?</strong> For now, no. Denver Devs
        doesn't make any money or usually have sponsors - so providing food and
        drinks out of pocket can get a bit rough. We'll be looking into it
        though.
      </p>
      <p>
        <strong>Will there be prizes?</strong> We're working on getting some
        swag produced, and possibly getting some neat raffle prizes worked out.
      </p>
      <p>
        <strong>Can I help? Or do you need sponsors?</strong> We're always open
        to folks helping out - please email{" "}
        <a href="mailto:info@denverdevs.org">info [at] denverdevs.org</a> to
        learn more.
      </p>
    </div>
  </Layout>
)

export default IndexPage
