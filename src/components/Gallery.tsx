import { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";
import styled from "styled-components";
import "../../node_modules/react-image-gallery/styles/css/image-gallery.css";

const FullHeightRow = styled.div`
  height: 100vh;
`;

export const Gallery = () => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    setSlide(0);
  }, []);

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

  return (
    <section id="gallery" className="resume-section container">
      <FullHeightRow className="d-flex flex-column align-items-center justify-content-center section-inner">
        <h1 className="mb-4">Gallery</h1>
        <div className="section-card gallery-card">
          <ImageGallery items={images} startIndex={slide} />
        </div>
      </FullHeightRow>
    </section>
  );
};
