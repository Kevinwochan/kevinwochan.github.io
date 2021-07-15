import React, { useState } from 'react'
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components';

const IconButton = styled.a`
  display: inline-block;
  font-size: 3rem;
  margin-right: 2rem;
  border-radius: 100%;

  & i {
    height: 3rem;
    transition: 0.5s ease-in-out;
    color: white;
  }

  &:hover i {
    color: #81a1c1;
  }
`

const FullHeightRow = styled.div`
  overflow-y: hidden;
  height: 100vh;
`;

const RAINBOW = `
linear-gradient(
        90deg,
        rgba(255, 0, 0, 1) 0%,
        rgba(255, 154, 0, 1) 10%,
        rgba(208, 222, 33, 1) 20%,
        rgba(79, 220, 74, 1) 30%,
        rgba(63, 218, 216, 1) 40%,
        rgba(47, 201, 226, 1) 50%,
        rgba(28, 127, 238, 1) 60%,
        rgba(95, 21, 242, 1) 70%,
        rgba(186, 12, 248, 1) 80%,
        rgba(251, 7, 217, 1) 90%,
        rgba(255, 0, 0, 1) 100%
    )
`

const About = () => {
  const [msg, setMsg] = useState(null);
  setTimeout(() => {
    setMsg("Pssst! You're still here? Why?");
  }, 10000);

  return (
    <section className="resume-section container">
      <FullHeightRow className="d-flex align-items-center justify-content-center">
        <div className="d-none d-lg-block d-flex-item text-end">
          <StaticImage className="img-fluid img-profile rounded-circle" src="../images/kevin.jpeg" alt="Kevin Chan" />
          {msg && (<h2>{msg}</h2>)}
        </div>
        <div className="p-5 d-flex-item">
          <StaticImage className="img-fluid img-profile rounded-circle mb-2 d-lg-none" src="../images/kevin.jpeg" alt="Kevin Chan" />
          <h1 className="mb-0">Kevin Chan</h1>
          <div className="subheading mb-1">
            Associate Cloud Architect at Amazon Web Services
          </div>
          <div className="mb-4">
            BSc Computer Science (Major in Security Engineering)
          </div>
          <div className="lead mb-4"><p className="lead">
            Software Engineer with cloud experience, interested in Information Security</p></div>
          <div className="subheading icons ml-1">
            <IconButton href="https://linkedin.com/in/kevinwochan/">
              <i className="bi bi-linkedin" />
            </IconButton>
            <IconButton href="https://github.com/Kevinwochan">
              <i className="bi bi-github" />
            </IconButton>
          </div>
        </div>
      </FullHeightRow>
    </section>
  );
}


const IndexPage = () => {
  return (
    <Layout>
      <About />
    </Layout>
  )
}

export default IndexPage;
