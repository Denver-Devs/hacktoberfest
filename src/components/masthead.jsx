import React from "react"
import styled from "styled-components"
import AddToCalendar from "react-add-to-calendar"
const MastheadSection = styled.section`
  padding: 20px 0 0 0;

  h1 {
    background: linear-gradient(
      HSLA(57, 99%, 67%, 1),
      HSLA(21, 100%, 67%, 1),
      HSLA(323, 81%, 57%, 1)
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Iceberg", "Roboto Mono", sans-serif;
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
    padding: 5px 0;
    border-top: 1px solid HSLA(323, 81%, 57%, 1);
    border-bottom: 1px solid HSLA(323, 81%, 57%, 1);
    transition: all 144ms ease-in;

    &:hover {
      cursor: pointer;
      text-shadow: 1px 1px 2px purple, 0 0 1em #00e1ff, 0 0 0.2em #00e1ff;
      transition: all 144ms ease-in;
    }
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

const HacktoberfestInfo = {
  title: "Denver Devs Hacktoberfest",
  description:
    "Its Hacktoberfest 2019! Come celebrate open source with your fellow Denver Devs!",
  location: "Flatiron School, 3601 Walnut St 5th Floor, Denver, CO 80205",
  startTime: "2019-10-10T18:00:00-06:00",
  endTime: "2019-10-10T21:00:00-06:00",
}

const Masthead = () => {
  return (
    <MastheadSection>
      <h1>
        Denver Devs <br />
        Hacktoberfest Night
      </h1>
      <div className="masthead-info">
        <div>October 10th, 6pm - 9pm</div>
        <div>
          <a
            href="https://goo.gl/maps/9S4H3Rt7Q8c4yJoq9"
            target="_blank"
            rel="noopener noreferrer"
          >
            Flatiron school
          </a>
        </div>
      </div>
      <AddToCalendar
        event={HacktoberfestInfo}
        buttonLabel={"++ Add to calendar"}
        listItems={[{ apple: "Apple Calendar" }, { google: "Google" }]}
      />
    </MastheadSection>
  )
}

export default Masthead
