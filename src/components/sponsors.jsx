import React from "react"
import styled from "styled-components"
import DevetryLogo from "../images/Devetry White.png"

const Sponsors = styled.div`
  margin-top: 30px;
  border-bottom: 1px solid HSLA(323, 81%, 57%, 1);

  h4 {
    margin-bottom: 5px;
    font-size: 14px;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      max-width: 140px;
    }
  }
`

export default function SponsorBlock() {
  return (
    <Sponsors>
      <h4>Thanks to our sponsors</h4>
      <ul>
        <li>
          <a href="https://devetry.com/" target="_blank">
            <img src={DevetryLogo} alt="Devetry" />
          </a>
        </li>
      </ul>
    </Sponsors>
  )
}
