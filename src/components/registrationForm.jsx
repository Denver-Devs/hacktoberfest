import React from "react"
import styled from "styled-components"

const RegistrationFormContainer = styled.div`
  margin: 20px 0;

  @media (min-width: 768px) {
    margin: 0 0 40px 0;
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
    transition: all 144ms ease-in;

    &:hover {
      cursor: pointer;
      box-shadow: 1px 1px 2px purple, 0 0 1em #00e1ff, 0 0 0.2em #00e1ff;
      transition: all 144ms ease-in;
    }
  }
`

const RegistrationForm = props => {
  return (
    <RegistrationFormContainer>
      <h3>&#x2F;&#x2F; Register</h3>
      <br />
      <h4>{props.userCount} are already registered and counting ...</h4>
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
          <br />
          By registering you agree to{" "}
          <a href="https://denverdevs.org/resources/code-of-conduct/">
            Denver Devs Code of Conduct
          </a>
        </sub>
      </form>
    </RegistrationFormContainer>
  )
}

export default RegistrationForm
