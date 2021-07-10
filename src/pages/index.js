import React, { useEffect, useState } from 'react'
import Layout from "../components/Layout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import './resume.css';
import styled from 'styled-components';

const IconButton = styled.a`
  display: inline-block;
  font-size: 3rem;

a:last-child {
  margin-right: 0;
}

a:hover {
  -webkit-box-shadow: rgba(15, 17, 21, 0.2) 0px 5px 10px 1px;
  box-shadow: rgba(15, 17, 21, 0.2) 0px 5px 10px 1px;
  background-color: #2E3440;
}

svg {
  transition: color 0.5s ease-in-out
}

`
const About = () => {
  return (
    <>
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <div className="w-100">
          <h1 className="mb-0">Kevin Chan</h1>
          <div className="subheading mb-1">
            Associate Cloud Architect at Amazon Web Services
          </div>
          <div className="mb-4">
            BSc Computer Science (Major in Security Engineering)
          </div>
          <div className="lead mb-4"><p className="lead">Software Engineer with cloud experience, interested in Information Security</p></div>
          <div className="subheading icons">
            <IconButton href="https://linkedin.com/in/kevinwochan/">
              <FontAwesomeIcon icon={faLinkedin} size={"lg"}/>
            </IconButton>
            <IconButton href="https://github.com/Kevinwochan">
              <FontAwesomeIcon icon={faGithub} size={"lg"}/>
            </IconButton>
          </div>
        </div>
      </section>
    </>
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
