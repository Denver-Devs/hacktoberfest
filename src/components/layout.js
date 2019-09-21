/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"

import "./layout.css"

const Container = styled.div`
  margin: 100px auto;
  max-width: 780px;
  background: HSLA(226, 46%, 14%, 1);
  position: relative;
  border-radius: 10px;

  &::before {
    top: 0;
    border-radius: 10px;
    position: absolute;
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    z-index: -1;
    box-shadow: inset 0 0 50px #fff, /* inner white */ inset 20px 0 80px #f0f,
      /* inner left magenta short */ inset -20px 0 80px #0ff,
      /* inner right cyan short */ inset 20px 0 300px #f0f,
      /* inner left magenta broad */ inset -20px 0 300px #0ff,
      /* inner right cyan broad */ 0 0 50px #fff,
      /* outer white */ -10px 0 80px #f0f,
      /* outer left magenta */ 10px 0 80px #0ff;
    animation: 8s flicker infinite;
  }

  @keyframes flicker {
    0% {
      opacity: 1;
    }
    5% {
      opacity: 0.6;
    }
    6% {
      opacity: 1;
    }
    7% {
      opacity: 0.4;
    }
    10%,
    100% {
      opacity: 1;
    }
  }

  main {
    background: HSLA(226, 46%, 14%, 1);
    width: 100%;
    height: 100%;
    padding: 40px;
    background: HSLA(226, 46%, 14%, 1);
    border-radius: 10px;
    z-index: 10;
    position: relative;
  }
`

const Layout = ({ children }) => {
  return (
    <>
      <Container>
        <main>{children}</main>
      </Container>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
