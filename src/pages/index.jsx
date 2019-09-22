import React from "react"
import styled from "styled-components"

import AddToCalendar from "react-add-to-calendar"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Masthead = styled.section`
  padding: 20px 0;

  h1 {
    background: linear-gradient(
      HSLA(57, 99%, 67%, 1),
      HSLA(21, 100%, 67%, 1),
      HSLA(323, 81%, 57%, 1)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Iceberg", cursive;
    font-size: 32px;
    letter-spacing: -0.01em;
    line-height: 0.9em;
    position: relative;

    @media (min-width: 768px) {
      font-size: 78px;
      letter-spacing: -0.01em;
      line-height: 0.9em;
    }

    &:after {
      animation: blink 0.5s step-end infinite;
      background: HSLA(226, 46%, 20%, 1);
      content: "";
      height: 24px;
      margin-left: 8px;
      margin-top: 2px;
      position: absolute;
      width: 16px;

      @media (min-width: 768px) {
        height: 56px;
        margin-left: 12px;
        margin-top: 5px;
        width: 25px;
      }
    }
  }

  @keyframes blink {
    from,
    to {
      background: transparent;
    }
    50% {
      background: HSLA(226, 46%, 20%, 1);
    }
  }

  .masthead-info {
    background: linear-gradient(
      HSLA(57, 99%, 67%, 1),
      HSLA(21, 100%, 67%, 1),
      HSLA(323, 81%, 57%, 1)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 16px;
    font-weight: 100;
    line-height: 32px;
    @media (min-width: 768px) {
      font-size: 24px;
      font-weight: 100;
      line-height: 32px;
    }
  }

  .react-add-to-calendar {
    font-size: 14px;
    text-transform: uppercase;
    margin-top: 15px;
    color: HSLA(323, 81%, 57%, 1);
    position: relative;
  }
  .react-add-to-calendar__button {
    color: HSLA(323, 81%, 57%, 1);
    cursor: crosshair;
    padding: 5px 0;
    border-top: 1px solid HSLA(323, 81%, 57%, 1);
    border-bottom: 1px solid HSLA(323, 81%, 57%, 1);
  }

  .react-add-to-calendar__dropdown {
    position: absolute;
    background: HSL(226, 46%, 18%);
    top: 27px;
    z-index: 10;
    padding: 17px;

    @media (min-width: 768px) {
      top: 28px;
    }

    ul {
      margin: 0;
      padding: 0;
      list-style: none;
    }
  }
`

const RegistrationForm = styled.div`
  margin: 20px 0;

  @media (min-width: 768px) {
    margin: 40px 0;
  }

  div {
    border-bottom: 1px solid HSLA(323, 81%, 57%, 0.6);
    border-left: 5px solid HSLA(323, 81%, 57%, 0.6);
    display: block;
    margin-bottom: 35px;
    position: relative;
    width: 100%;

    &:first-of-type {
      margin-top: 20px;
    }

    @media (min-width: 768px) {
      width: 70%;
    }
  }

  div input:focus + label,
  div input:visited + label {
    transform: translateY(-24px);
    color: HSLA(226, 46%, 45%, 1);
    transition: all 133ms ease-in-out;
  }

  input:not(:placeholder-shown) {
    border-color: hsl(0, 76%, 50%);
  }

  label {
    display: inline-block;
    background: none;
    border: none;
    padding-left: 12px;
    color: HSLA(226, 46%, 65%, 1);
    position: absolute;
    left: 0;
    transition: all 133ms ease-in-out;
    font-size: 16px;
  }

  input:valid {
    border-color: hsl(120, 76%, 50%);
  }
  input[type="text"],
  input[type="email"] {
    color: HSLA(226, 46%, 65%, 1);
    padding: 2px 10px;
    border: none;
    background: none;
    width: 70%;
    outline: none;
    font-size: 18px;

    &::placeholder {
      color: rgba(0, 0, 0, 0);
    }
    &:not(:placeholder-shown) + label {
      transform: translateY(-24px);
      color: HSLA(226, 46%, 45%, 1);
    }
  }

  input[type="submit"] {
    border: 1px solid HSLA(323, 81%, 57%, 0.6);
    background: HSLA(323, 81%, 57%, 0.3);

    color: HSLA(323, 90%, 85%, 1);
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
          <a href="https://goo.gl/maps/9S4H3Rt7Q8c4yJoq9" target="_blank">
            Flatiron school
          </a>
        </div>
      </div>
      <AddToCalendar
        event={HacktoberfestInfo}
        buttonLabel={"++ Add to calendar"}
        listItems={[{ apple: "Apple Calendar" }, { google: "Google" }]}
      />
    </Masthead>
    <RegistrationForm>
      <h3>&#x2F;&#x2F; Register</h3>
      <form
        name="contact"
        method="post"
        action="/registered"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="bot-field" />
        <input type="hidden" name="form-name" value="contact" />
        <div>
          <input type="text" name="name" id="name" placeholder="//" />
          <label htmlFor="name">Name</label>
        </div>
        <div>
          <input type="text" name="email" id="email" placeholder="//" />
          <label htmlFor="email">Email</label>
        </div>
        <div>
          <input
            type="text"
            name="slackHandle"
            id="slackHandle"
            placeholder="//"
          />
          <label htmlFor="slackHandle">Slack Handle</label>
        </div>
        <input type="submit" value="Register" className="special" />
        <br />
        <sub>
          Registration helps us gauge interest. <br />
          Your information wont be used in any way.
        </sub>
      </form>
    </RegistrationForm>
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
        <strong>Will there be prizes?</strong> You'll get items for completing
        the Hacktoberfest requirements. We might also have some neat swag items
        & maybe do a raffle for some cool tech gear.
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
