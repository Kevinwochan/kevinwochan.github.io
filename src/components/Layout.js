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
`;

const StyledNav = styled.nav`
  font-weight: 800;
  letter-spacing: 0.05rem;
  text-transform: uppercase;
  background-color: #242933;
  .navbar-toggler:focus {
    outline-color: white;
  }
`;

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