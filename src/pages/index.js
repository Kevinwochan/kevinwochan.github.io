import React, { useEffect, useState } from 'react'
import Layout from "../components/Layout"
import './resume.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'gatsby'


const Projects = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios.get('https://api.github.com/users/kevinwochan/repos').then((response) => {
      setProjects(response);
    })
  }, []);
  return (
    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="projects">
      <div className="w-100">
        <h2 className="mb-5">Projects</h2>
        {/*projects.map((project) => (
                    <div className="resume-item mb-5">
                        <div className="resume-item-header d-flex flex-column flex-md-row justify-content-between">
                            <h3 className="mb-0">{project.name}</h3>
                        </div>
                        <div className="resume-content">
                            {project.description}
                        </div>
                    </div>
                ))*/}
      </div>
    </section>
  );
}

const Certificates = () => {
  // TODO: Turn this into a credly collage
  return (
    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="certificates">
      <div className="w-100">
        <h2 className="mb-5">Certificates</h2>

        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-2">Offensive Security</h3>
            <div className="subheading mb-0">Certified Professional</div>
            <div>Offensive Security Certified Professional</div>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">2022</span>
          </div>
        </div>
        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-5">
          <div className="resume-content">
            <h3 className="mb-2">Amazon Web Services</h3>
            <div className="subheading mb-0">Associate Certified</div>
            <div>Associate Solution Architect - May 2021</div>
            <div>Associate Developer - June 2021</div>
            <div>Associate SysOps Administrator - June 2021</div>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">2021</span>
          </div>
        </div>

      </div>
    </section>
  );
}

const Education = () => {
  return (
    <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="education">
      <div className="w-100">
        <h2 className="mb-5">Education</h2>
        <div className="resume-item d-flex flex-column flex-md-row justify-content-between mb-1">
          <div className="resume-content">
            <h3 className="mb-2">University of New South Wales</h3>
            <div className="subheading mb-0">Bachelors of Computer Science (Major in Security Engineering)</div>
            <div>Data Structures and Algorithms</div>
            <div>Object Oriented Design</div>
            <div>Web Application Security and Testing</div>
            <div>Software Security Assessment (binary exploitation)</div>
            <div>Security Engineering</div>
            <div>Digital Forensics</div>
            <div>Codes and Ciphers</div>
            <div>Computer Networks</div>
            <div>Databases</div>
          </div>
          <div className="resume-date text-md-right">
            <span className="text-primary">2020</span>
          </div>
        </div>
      </div>
    </section>
  );
}

const About = () => {
  return (
    <>
      <section className="resume-section p-3 p-lg-5 d-flex align-items-center" id="about">
        <div className="w-100">
          <h1 className="mb-0">Kevin Chan</h1>
          <div className="subheading mb-4">
            Associate Solution Architect at Amazon Web Services · BSc Computer Science at UNSW
          </div>
          <div className="lead mb-4"><p className="lead">Cloud</p></div>
          <div className="subheading icons">
            <a href="https://linkedin.com/in/kevinwochan/">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/Kevinwochan">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="mailto:kevinwochan@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

const Experience = () => {
  return (
    <section className="resume-section p-3 p-lg-5 d-flex justify-content-center" id="experience">
      <div className="w-100">
        <h2 className="mb-5">Experience</h2>

        <div className="resume-item mb-5">
          <div className="resume-item-header d-flex flex-column flex-md-row justify-content-between">
            <h3 className="mb-0">Software Developer</h3>
            <div className="resume-date text-md-right">
              <span className="text-primary">Janurary 2019 - Present</span>
            </div>
          </div>
          <div className="resume-item-content">
            <div className="subheading mb-3">Ocius Technology</div>
            <li>Parsed industrial standard map data into a database for autonomous navigation systems using Python and PostgreSQL</li>
            <li> Migrated existing JavaScript GIS implementation from ArcGIS to OpenLayers with a 3fps to 35fps increase </li>
          </div>
        </div>

        <div className="resume-item mb-5">
          <div className="resume-item-header d-flex flex-column flex-md-row justify-content-between">
            <h3 className="mb-0">Technology Lead</h3>
            <div className="resume-date text-md-right">
              <span className="text-primary">March 2017 - April 2019</span>
            </div>
          </div>
          <div className="resume-item-content">
            <div className="subheading mb-3">Textbook Ventures</div>
            <li> Collaborated with a team of 3 developers to build Sydney’s first startup directory handling 400 entries using SQLite</li>
            <li> Designed 2 event-based websites with Django, Apache, AWS, HTML, CSS, JavaScript for search engine optimization</li>
            <li> Managed 4 servers’ DNS records, SSL certification and AWS Load balancing for site reliability </li>
            <li> Built the team’s first website using WordPress CMS achieving 1500 views per month </li>
          </div>
        </div>

        <div className="resume-item mb-5">
          <div className="resume-item-header d-flex flex-column flex-md-row justify-content-between">
            <h3 className="mb-0">Student Asssitant</h3>
            <div className="resume-date text-md-right">
              <span className="text-primary">Feburary 2018 - August 2018</span>
            </div>
          </div>
          <div className="resume-item-content">
            <div className="subheading mb-3">UNSW Continuing Legal Education</div>
            <li>Developed a Salesforce database schema containing 12 years of existing data for a new line of products</li>
            <li>Implemented payment verification using OneStop Payment API, Salesforce and Drupal CMS handling 100’s of monthly sale</li>
            <li>Automated emails for attendance, invoicing, reminders and registration confirmation to 100’s of customers every month</li>
          </div>
        </div>

        <div className="resume-item">
          <div className="resume-item-header d-flex flex-column flex-md-row justify-content-between">
            <h3 className="mb-0">WordPress Developer</h3>
            <div className="resume-date text-md-right">
              <span className="text-primary">September 2017 - Janurary 2019</span>
            </div>
          </div>
          <div className="resume-item-content">
            <div className="subheading mb-3">Ocius Technology</div>
            <li>Redesigned company WordPress CMS theme in PHP, CSS and HTML doubling views per month</li>
            <li>Customised mass emails keeping 300 subscribers up to date with the latest company news and breakthroughs</li>
            <li>Consulted directly with CEO to continually customize the website to reflect the rapidly growing company</li>
          </div>
        </div>

      </div>
    </section>
  );
}
const IndexPage = () => {
  return (
    <Layout>
      <About />
      <Projects />
      <Experience />
      <Education />
      <Certificates />
    </Layout>
  )
}

export default IndexPage;
