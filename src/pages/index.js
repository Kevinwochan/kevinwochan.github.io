import React, { useState } from 'react'
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import styled from 'styled-components';
import Typist from 'react-typist';
import '../../node_modules/react-typist/dist/Typist.css'
import { Presentations } from '../components/Presentations';
import { Gallery } from '../components/Gallery';

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

const About = () => {
  const [msg, setMsg] = useState(null);
  setTimeout(() => {
    setMsg("Pssst! You're still here?");
  }, 30000);

  return (
    <section className="resume-section container">
      <FullHeightRow className="d-flex align-items-center justify-content-center">
        <div className="d-none d-lg-block d-flex-item text-end">
          <StaticImage layout="fixed" height={200} width={200} className="img-fluid img-profile rounded-circle" src="../images/kevin.jpeg" alt="Kevin Chan" />
          {msg && (<h2 className="mt-2">{msg}</h2>)}
        </div>
        <div className="p-5 d-flex-item">
          <StaticImage layout="fixed" height={200} width={200} className="img-fluid img-profile rounded-circle mb-2 d-lg-none" src="../images/kevin.jpeg" alt="Kevin Chan"
          />
          <h1 className="mb-0">Kevin Chan</h1>
          <div className="subheading mb-1">
            Solutions Architect (ISV) at Amazon Web Services
          </div>
          <div className="mb-4">
            BSc Computer Science (Major in Security Engineering)
          </div>
          <div className="lead mb-4">
            <p className="lead">
              <Typist>
                Software Engineer interested in information security and software architectures.
              </Typist>
            </p>
          </div>
          <div className="subheading icons ml-1">
            <IconButton href="https://linkedin.com/in/kevinwochan/">
              <i className="bi bi-linkedin" onClick={() => { setMsg('Talk to you soon....') }} />
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

const Events = () => {
  <section className="resume-section container">
    <FullHeightRow className="d-flex align-items-center justify-content-center">
      <h1 className="mb-0">Events</h1>
    </FullHeightRow>
  </section>
}


const IndexPage = () => {
  return (
    <Layout>
      <About />
      <Gallery />
      <Presentations />
    </Layout>
  )
}

export default IndexPage;
