import React from "react"
import styled from "styled-components"

import AddToCalendar from "react-add-to-calendar"
import Layout from "../components/layout"
import SEO from "../components/seo"
import mastheadImage from "../images/hacktoberfest-lockup.png"

const Masthead = styled.section`
  padding: 20px 0;

  h1 {
    font-size: 78px;
    /* font-weight: 700; */
    line-height: 0.9em;
    letter-spacing: -0.01em;
    background: linear-gradient(
      HSLA(57, 99%, 67%, 1),
      HSLA(21, 100%, 67%, 1),
      HSLA(323, 81%, 57%, 1)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    position: relative;
    font-family: "Iceberg", cursive;
    position: relative;

    &:after {
      position: absolute;
      content: '';
      width: 25px;
      height: 56px;
      margin-top: 5px;
      margin-left: 12px;
      background: HSLA(226, 46%, 20%, 1.00);
      animation: blink 0.5s step-end infinite;
    }
  }

  @keyframes blink {
    from, to {
    background: transparent;
  }
  50% {
    background: HSLA(226, 46%, 20%, 1.00);
  }
  }

  img {
    max-height: 200px;
  }

  .masthead-info {
    font-weight: 100;
    font-size: 24px;
    line-height: 32px;
    background: linear-gradient(
      HSLA(57, 99%, 67%, 1),
      HSLA(21, 100%, 67%, 1),
      HSLA(323, 81%, 57%, 1)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .react-add-to-calendar {
    font-size: 14px;
    text-transform: uppercase;
    margin-top: 15px;
    color: HSLA(323, 81%, 57%, 1);
  }
  .react-add-to-calendar__button {
      color: HSLA(323, 81%, 57%, 1);
      cursor: crosshair;
      padding: 5px 0;
      border-top: 1px solid HSLA(323, 81%, 57%, 1);
      border-bottom: 1px solid HSLA(323, 81%, 57%, 1);
    }
  }
`

const RegistrationForm = styled.div`
  margin: 40px 0;

  div {
    margin-bottom: 15px;
    display: block;
    width: 100%;
  }

  label {
    display: inline-block;
    background: none;
    border: none;
    border-left: 5px solid HSLA(323, 81%, 57%, 0.6);
    padding-left: 10px;
    color: HSLA(226, 46%, 65%, 1);
    width: 150px;
  }
  input {
    background: HSLA(226, 46%, 10%, 1);
    color: HSLA(226, 46%, 65%, 1);
    padding: 2px 10px;
    margin-left: 10px;
    border: none;
  }

  input[type="submit"] {
    border: 1px solid HSLA(323, 81%, 57%, 0.6);
    color: HSLA(226, 46%, 75%, 1);
  }
`

const HacktoberfestInfo = {
  title: "Denver Devs Hacktoberfest",
  description:
    "Its Hacktoberfest 2019! Come celebrate open source with your fellow Denver Devs!",
  location: "Flatiron School, 3601 Walnut St 5th Floor, Denver, CO 80205",
  startTime: "2019-10-15T18:00:00-06:00",
  endTime: "2019-10-15T21:00:00-06:00",
}

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Masthead>
      <h1>
        Denver Devs <br />
        Hacktoberfest Night
      </h1>
      <div className="masthead-info">
        <div>October 10th, 6pm - 9pm</div>
        <div>
          <a href="google.com">Flatiron school</a>
        </div>
      </div>
      <AddToCalendar
        event={HacktoberfestInfo}
        buttonLabel={"++ Add to calendar"}
      />
    </Masthead>
    <RegistrationForm>
      <h3>// Register</h3>
      <form
        name="contact"
        method="post"
        action="/success"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <div className="registrationCard">
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
        </div>
        <input type="submit" value="Register" className="special" />
        <br />
        <sub>
          Registration helps us gague interest. <br />
          Your information wont be used in any way.
        </sub>
      </form>
    </RegistrationForm>
    <div className="info">
      <h3>// Agenda</h3>
      <ul>
        <li>[6pm] [Brief intro to Hacktoberfest]</li>
        <li>
          [6:15~ 8:30pm] [Hacking time! Submit PR's, help out your fellow devs,
          have fun!]
        </li>
        <li>[8:30 - 9pm] [Demos and show off time.]</li>
      </ul>
      <h3>// What's Hacktoberfest?</h3>
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
      <h3>// Rules and prizes</h3>
      <p>
        First, sign up on the Hacktoberfest site at{" "}
        <a href="https://hacktoberfest.digitalocean.com">
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
        <a href="https://do.co/hacktoberfest50">do.co/hacktoberfest50</a>.
      </p>
    </div>
  </Layout>
)

export default IndexPage
