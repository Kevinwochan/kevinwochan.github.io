import React from 'react';
import styled from 'styled-components'
import { Helmet } from "react-helmet";
import favicon from '../images/kevin.jpeg'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import '../pages/resume.css';

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
            </Helmet>
            <StyledMain>
                {children}
            </StyledMain>
            <footer>
            </footer>
        </>
    );
}

export default Layout;