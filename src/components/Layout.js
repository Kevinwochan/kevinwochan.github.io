import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components'
import { Helmet } from "react-helmet";
import favicon from '../images/kevin.jpeg'
import '../pages/resume.css';
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

const StyledMain = styled.div`
  font-family: 'Source Sans Pro', sans-serif;
  background-color: #242933;
  color: #D8DEE9;
  overflow-y: hidden;
  height: 100vh;
`;

const StyledNav = styled.nav`
  font-weight: 800;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
  background-color: #242933;
  .navbar-toggler:focus {
    outline-color: white;
  }
`

const Layout = ({ children }) => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

                <meta name="description" content="Software Engineer with cloud experience, interested in Information Security" />
                <meta name="author" content="Kevin Chan" />

                <meta property="og:title" content="Kevin Chan" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://kevinwochan.com/" />
                <meta property="og:site_name" content="Kevin Chan" />
                <link rel="icon" href={favicon} />

                <title>Kevin Chan</title>

                <link href="https://fonts.googleapis.com/css?family=Archivo+Narrow|Julius+Sans+One|SourceSans+Pro&display=swap" rel="stylesheet" />
                <link
                    rel="stylesheet"
                    href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css"
                    integrity="sha384-B0vP5xmATw1+K9KRQjQERJvTumQW0nPEzvF6L/Z6nronJ3oUOFUFpCjEUQouq2+l"
                    crossOrigin="anonymous"
                />
                <link rel="icon" type="image/jpeg" href="" sizes="16x16" />
                <style src="@fortawesome/fontawesome-svg-core/styles.css" />
            </Helmet>
            <StyledNav className="navbar navbar-expand-lg navbar-dark fixed-top" id="sideNav">
                <a className="navbar-brand js-scroll-trigger" href="#page-top">
                    <span className="d-block d-lg-none">Kevin Chan</span>
                    <span className="d-none d-lg-block">
                        <StaticImage className="img-fluid img-profile rounded-circle mx-auto mb-2" src="../images/kevin.jpeg" alt="Kevin Chan" />
                    </span>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                </div>
            </StyledNav>
            <StyledMain>
                {children}
            </StyledMain>
            <footer>
                <script src="https://unpkg.com/react/umd/react.production.min.js" crossOrigin></script>

                <script
                    src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
                    crossOrigin></script>

                <script
                    src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
                    crossOrigin></script>

            </footer>
        </>
    );
}

export default Layout;