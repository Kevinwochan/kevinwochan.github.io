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
  height: 90vh;
`;

const About = () => {
  const [msg, setMsg] = useState("");

  const badgeUrls = [
    "./badges/CKA.png",
    "./badges/DevOpsPro.png",
    "./badges/SAPro.png",
  ];

  setTimeout(() => {
    setMsg("Pssst! You're still here?");
  }, 30000);

  return (
    <section className="resume-section container">
      <FullHeightRow className="d-flex align-items-center justify-content-center">
        <div className="d-none d-lg-block d-flex-item">
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
        <div className="p-5 d-flex-item">
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
            BSc Computer Science (Major in Security Engineering)
          </div>
          <div className="lead mb-4">
            <p className="lead">
              Software Engineer interested in information security and software
              architectures.
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
