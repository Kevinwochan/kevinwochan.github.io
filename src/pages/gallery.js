import React from 'react'
import Layout from "../components/Layout"
import styled from 'styled-components';
import '../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import { useStaticQuery, graphql } from "gatsby"
import ImageGallery from "react-image-gallery";


const FullHeightRow = styled.div`
  overflow-y: hidden;
  height: 100vh;
`;

const Gallery = ({ slide }) => {
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
    .filter(p => p.node.publicURL)
    .map(p => ({ original: p.node.publicURL, thumbnail: p.node.publicURL }));

  return (
    <section className="resume-section container">
      <FullHeightRow className="d-flex align-items-center justify-content-center">
        <ImageGallery items={images} startIndex={slide || 0} />
      </FullHeightRow>
    </section>
  );
}


// https://www.gatsbyjs.com/docs/location-data-from-props/
const IndexPage = ({ location }) => {
  const { slide } = new URLSearchParams(location?.search);
  return (
    <Layout>
      <Gallery slide={slide} />
    </Layout>
  )
}

export default IndexPage;
