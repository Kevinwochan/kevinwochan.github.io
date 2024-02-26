import React, { useEffect, useState } from 'react'
import Layout from "../components/Layout"
import '../../node_modules/react-image-gallery/styles/css/image-gallery.css';
import { Gallery } from '../components/Gallery';

// https://www.gatsbyjs.com/docs/location-data-from-props/
export const GalleryPage = ({ location }) => {
  return (
    <Layout>
      <Gallery location={location} />
    </Layout>
  )
}

