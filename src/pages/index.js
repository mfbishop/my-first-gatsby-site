// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Strona Lusi i Felci">
      <p>Witamy na stronie Lusi i Felci.</p>
      <StaticImage
        alt="zdjęcie Lusi i Felci"
        src="../images/lif.jpg"
      />
    </Layout>
  )
}
// Step 3: Export your component
export default IndexPage