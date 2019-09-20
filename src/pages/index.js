import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import mastheadImage from "../images/hacktoberfest-lockup.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />

    <div className="masthead">
      <h1>Denver Devs Hacktoberfest Night</h1>
      <img
        src={mastheadImage}
        alt="Denver Devs Hacktoberfest Event"
        style={{ maxHeight: 500 }}
      />
      <div>10th, 6pm - 9pm</div>
      <div>Flatiron school</div>
    </div>
    <div className="registration">
      <h3>Register</h3>
      <form
        name="contact"
        method="post"
        action="/success"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="slackHandle">Slack Handle</label>
          <input type="text" name="slackHandle" id="slackHandle" />
        </div>

        <input type="submit" value="Register" className="special" />
      </form>
    </div>
    <div className="info">
      <h3>Agenda</h3>
      <ul>
        <li>[6pm] [Brief intro to Hacktoberfest]</li>
        <li>
          [6:15~ 8:30pm] [Hacking time! Submit PR's, help out your fellow devs,
          have fun!]
        </li>
        <li>[8:30 - 9pm] [Demos and show off time.]</li>
      </ul>
      <h3>What's Hacktoberfest?</h3>
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
      <h3>Rules and prizes</h3>
      <p>
        First, sign up on the Hacktoberfest site at
        https://hacktoberfest.digitalocean.com. To qualify for the official
        limited edition Hacktoberfest shirt, you must register and make four
        pull requests between October 1-31. Pull requests can be to any public
        repo on GitHub, not just the ones with issues labeled Hacktoberfest. If
        a maintainer reports your pull request as spam or behavior not in line
        with the project’s code of conduct, you will be ineligible to
        participate.
      </p>
      <p>
        Connect with other Hacktoberfest participants by using #hacktoberfest on
        your social media platform of choice.{" "}
      </p>

      <p>
        New to DigitalOcean? Receive USD $50 in infrastructure credit at
        https://do.co/hacktoberfest50.
      </p>
    </div>
  </Layout>
)

export default IndexPage
