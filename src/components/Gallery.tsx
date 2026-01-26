import ImageGallery from "react-image-gallery";
import styled from "styled-components";
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";

const FullHeightRow = styled.div`
  height: 100vh;
`;

const images = [
    {
      original: "./events/EDA Sydney Serverless.jpg",
      thumbnail: "./events/EDA Sydney Serverless.jpg",
    },
    {
      original: "./events/New Zealand.jpg",
      thumbnail: "./events/New Zealand.jpg",
    },
    {
      original: "./events/HackTheBox.png",
      thumbnail: "./events/HackTheBox.png",
    },
    {
      original: "./events/Serverless Developer Experience.jpg",
      thumbnail: "./events/Serverless Developer Experience.jpg",
    },
    {
      original: "./events/Infrastrucure as Code with AWS CDK.jpg",
      thumbnail: "./events/Infrastrucure as Code with AWS CDK.jpg",
    },
];

export const Gallery = () => (
  <section id="gallery" className="resume-section container">
    <FullHeightRow className="d-flex flex-column align-items-center justify-content-center section-inner">
      <h1 className="section-title">Gallery</h1>
      <div className="section-card gallery-card">
        <ImageGallery items={images} />
      </div>
    </FullHeightRow>
  </section>
);
