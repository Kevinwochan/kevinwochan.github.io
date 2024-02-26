import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import '../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import { useStaticQuery, graphql } from "gatsby"
import ImageGallery from "react-image-gallery";


const FullHeightRow = styled.div`
  overflow-y: hidden;
  height: 100vh;
`;

// https://www.gatsbyjs.com/docs/location-data-from-props/
export const Gallery = ({ location }) => {
  const [slide, setSlide] = useState();

  useEffect(() => {
    const params = new URLSearchParams(location?.search);
    setSlide(Number(params.get('slide')));
  }, [])
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: {relativeDirectory: {eq: "events"}}) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
`)

  const images = data.allFile.edges
    .sort((a, b) => a.node.publicURL - b.node.publicURL)
    .filter(p => p.node.publicURL)
    .map(p => ({ original: p.node.publicURL, thumbnail: p.node.publicURL }));

  return (
    <section className="resume-section container">
      <FullHeightRow className="d-flex align-items-center justify-content-center">
        <ImageGallery items={images} startIndex={slide} />
      </FullHeightRow>
    </section>
  )
}

