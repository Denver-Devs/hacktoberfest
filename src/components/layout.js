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
  background: HSLA(226, 46%, 14%, 1);
  border-radius: 10px;
  margin: 15px;
  max-width: 780px;
  position: relative;

  @media (min-width: 768px) {
    margin: 100px auto;
  }

  &::before {
    animation: 8s flicker infinite;
    border-radius: 10px;
    content: "";
    display: block;
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
    box-shadow: inset 0 0 50px #fff, inset 20px 0 80px #f0f,
      inset -20px 0 80px #0ff, inset 20px 0 300px #f0f, inset -20px 0 300px #0ff,
      0 0 50px #fff, -10px 0 80px #f0f, 10px 0 80px #0ff;
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
    border-radius: 10px;
    height: 100%;
    padding: 20px;
    position: relative;
    width: 100%;
    z-index: 10;

    @media (min-width: 768px) {
      padding: 40px;
    }
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
