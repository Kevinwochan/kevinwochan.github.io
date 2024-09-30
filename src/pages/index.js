import { graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import Typist from "react-typist";
import styled from "styled-components";
import "../../node_modules/react-typist/dist/Typist.css";
import { Gallery } from "../components/Gallery";
import Layout from "../components/Layout";
import { Presentations } from "../components/Presentations";

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
`;

const FullHeightRow = styled.div`
  overflow-y: hidden;
  height: 90vh;
`;

const About = () => {
  const data = useStaticQuery(graphql`
    query badges {
      allFile(filter: { relativeDirectory: { eq: "badges" } }) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `);

  const badgeUrls = data.allFile.edges
    .sort((a, b) => a.node.publicURL - b.node.publicURL)
    .filter((p) => p.node.publicURL)
    .map((p) => p.node.publicURL);

  return (
    <section className="resume-section container">
      <FullHeightRow className="d-flex align-items-center justify-content-center">
        <div className="d-none d-lg-block d-flex-item">
          <StaticImage
            layout="fixed"
            height={200}
            width={200}
            className="img-fluid img-profile rounded-circle"
            src="../images/kevin.jpeg"
            alt="Kevin Chan"
          />
          <div className="subheading icons text-left my-3">
            <IconButton href="https://linkedin.com/in/kevinwochan/">
              <i
                className="bi bi-linkedin"
              />
            </IconButton>
            <IconButton href="https://github.com/Kevinwochan">
              <i className="bi bi-github" />
            </IconButton>
          </div>
        </div>
        <div className="p-5 d-flex-item">
          <StaticImage
            layout="fixed"
            height={200}
            width={200}
            className="img-fluid img-profile rounded-circle mb-2 d-lg-none"
            src="../images/kevin.jpeg"
            alt="Kevin Chan"
          />
          <h1 className="mb-0">Kevin Chan</h1>
          <div className="subheading mb-1">
            Solutions Architect for software businesses at Amazon Web Services
          </div>
          <div className="lead mb-4">
            <p>
              <Typist>
              An engineer with a passion for software and security.
              <Typist.Backspace count={53} delay={5000} />
              Builder on weekdays, HackTheBox on weekends
              <Typist.Backspace count={43} delay={5000} />
              “Work Hard, have fun, make history” - Jeff Bezos
              <Typist.Backspace count={48} delay={5000} />
              "Kevin is a genius of his generation" - Albert Einstein probably
              <Typist.Backspace count={64} delay={5000} />
              “Kindness Makes the World Go Round” - Sesame Street
              <Typist.Backspace count={51} delay={5000} />
              “Don't cling to things because everything is impermanent.”― Tuesdays with Morrie
              </Typist>
              </p>
          </div>
          <div className="subheading icons ml-1">
            {badgeUrls.map((url) => (
              <img
                src={url}
                className="m-2"
                style={{ maxWidth: "20vw", maxHeight: "10vh" }}
              />
            ))}
          </div>
        </div>
      </FullHeightRow>
      <i
        class="bi bi-arrow-down-short h1 position-absolute"
        style={{
          bottom: "0",
          left: "50%",
          animation: "down 2s infinite",
          fontSize: "4rem",
        }}
      />
    </section>
  );
};

const Events = () => {
  <section className="resume-section container">
    <FullHeightRow className="d-flex align-items-center justify-content-center">
      <h1 className="mb-0">Events</h1>
    </FullHeightRow>
  </section>;
};

const IndexPage = () => {
  return (
    <Layout>
      <About />
      <Gallery />
      <Presentations />
    </Layout>
  );
};

export default IndexPage;
