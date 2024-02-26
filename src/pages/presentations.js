import React, { useEffect, useState } from 'react'
import Layout from "../components/Layout"
import Presentations from "../components/Presentations"
import styled from 'styled-components';


const FullHeightRow = styled.div`
  overflow-y: hidden;
  height: 100vh;
`;

// https://www.gatsbyjs.com/docs/location-data-from-props/
const PresentationsPage = ({ location }) => {

  useEffect(() => {
    const params = new URLSearchParams(location?.search);
  }, [])
  return (
    <Layout>
      <section className="resume-section container">
        <Presentations />
      </section>
    </Layout >
  )
}

export default PresentationsPage;
