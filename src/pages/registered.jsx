import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

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
      <h3>&#x2F;&#x2F; You have Registered</h3>
      <p>
        Thank you for registering! We look forward to seeing you on the 10th.
      </p>
      <p>
        Need to register someone else?{" "}
        <Link to="/">Head back to the landing page -></Link>
      </p>
    </RegistrationForm>
  </Layout>
)

export default IndexPage