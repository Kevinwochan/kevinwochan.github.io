import { useState } from "react";
import styled from "styled-components";

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
  min-height: 90vh;
`;

const About = () => {
  const [msg, setMsg] = useState("");

  const badges = [
    {
      img: "./badges/CKA.png",
      alt: "Certified Kubernetes Administrator",
      cert: "https://www.credly.com/badges/bf12994e-b91b-41ff-a677-c97566a538d4/public_url",
    },
    {
      img: "./badges/SAPro.png",
      alt: "Security Architect Professional",
      cert: "https://cp.certmetrics.com/amazon/en/public/verify/credential/EWJ9MHNLDJVQQ4SG",
    },
    {
      img: "./badges/SecSpec.png",
      alt: "AWS Security Specialist",
      cert: "https://cp.certmetrics.com/amazon/en/public/verify/credential/c2cf219a44ad4009898dc4f365543274",
    },
    {
      img: "./badges/DiveAdv.png",
      alt: "Advanced Diver",
      cert: "https://learn.diveisc.com/ISC/Find_My_Certification.asp",
    },
    {
      img: "./badges/DiveNitrox.png",
      alt: "Nitrox Diver",
      cert: "https://learn.diveisc.com/ISC/Find_My_Certification.asp",
    },
    {
      img: "./badges/TerraAss.png",
      alt: "Terraform Associate",
      cert: "https://www.credly.com/badges/e539092d-af1c-497d-aeb9-2ef83daaaa0e/public_url",
    },
    {
      img: "./badges/BasicQuantum.png",
      alt: "Basic Quantum Computing",
      cert: "https://www.credly.com/badges/9c9147f1-a391-44fa-97b5-c54cd034fd78/public_url",
    },
  ];

  setTimeout(() => {
    setMsg("Pssst! You're still here?");
  }, 30000);

  return (
    <section id="about" className="resume-section container">
      <FullHeightRow className="d-md-flex align-items-center justify-content-center section-inner about-layout">
        <div className="d-none d-lg-block d-flex-item profile-column">
          <img
            style={{
              height: 200,
            }}
            className="img-fluid img-profile rounded-circle"
            src="../kevin.jpeg"
            alt="Kevin Chan"
          />
          <div className="subheading icons text-left my-3">
            <IconButton href="https://linkedin.com/in/kevinwochan/">
              <i
                className="bi bi-linkedin"
                onClick={() => {
                  setMsg("Talk to you soon....");
                }}
              />
            </IconButton>
            <IconButton href="https://github.com/Kevinwochan">
              <i className="bi bi-github" />
            </IconButton>
          </div>
        </div>
        <div className="p-5 d-flex-item about-card">
          <img
            style={{
              height: 200,
            }}
            className="img-fluid img-profile rounded-circle mb-2 d-lg-none"
            src="../kevin.jpeg"
            alt="Kevin Chan"
          />
          <h1 className="mb-0">Kevin Chan</h1>
          <div className="subheading mb-1">
            Solutions Architect (ISV) at Amazon Web Services
          </div>
          <div className="mb-4">
            BSc Computer Science (Major in Security Engineering) - The
            University of New South Wales
          </div>
          <div className="lead mb-4">
            <p className="lead">
              A builder, tinkerer and engineer at heart.
            </p>
            <p className="lead">
              With a passion for information security and software architecture.
            </p>
          </div>
          <div className="subheading icons ml-1 badge-grid">
            {badges.map((badge) => (
              <a href={badge.cert}>
                <img
                  src={badge.img}
                  alt={badge.alt}
                  className="m-2"
                  style={{ maxWidth: "20vw", maxHeight: "10vh" }}
                />
              </a>
            ))}
          </div>

          {msg}
        </div>
      </FullHeightRow>
      <i
        className="bi bi-arrow-down-short h1 position-absolute"
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

export default About;
