import styled from "styled-components";

const FullHeightRow = styled.div`
  overflow-y: hidden;
  min-height: 90vh;
`;

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

const About = () => (
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
          <div className="mb-4" style={{ fontSize: "0.95rem", lineHeight: "1.6" }}>
            <p className="mb-2">
              Software Engineer with a background spanning AWS, defence, and early-stage startups.
            </p>
            <p className="mb-2">
              At AWS I worked as a Solutions Architect, helping software companies design and migrate cloud infrastructure at scale. Before that I built systems in high-compliance defence environments and wore many hats across the full stack at startups.
            </p>
            <p className="mb-0">
              These days I'm focused on agentic AI — building orchestration systems that coordinate autonomous agents to solve complex, multi-step problems. I'm drawn to the infrastructure and reliability challenges that emerge when AI systems need to act, not just respond.
            </p>
          </div>
          <div className="badge-grid">
            {badges.map((badge) => (
              <a key={badge.alt} href={badge.cert}>
                <img
                  src={badge.img}
                  alt={badge.alt}
                  className="m-2"
                  style={{ maxWidth: "20vw", maxHeight: "10vh" }}
                />
              </a>
            ))}
          </div>
        </div>
      </FullHeightRow>
    </section>
);

export default About;
