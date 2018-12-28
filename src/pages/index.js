import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'
import Img from 'gatsby-image'

import { siteMetadata } from '../../gatsby-config'
import Post from 'templates/Post'
import Meta from 'components/Meta'
import Layout from 'components/Layout'

class Home extends React.Component {
  render() {
    const { location, data } = this.props
    const hero = get(data, 'hero.childImageSharp.fluid')

    return (
      <Layout location={location}>
        <Meta site={siteMetadata} title="Home" />
        <section className="hero-section">
          <figure>
            <Img fluid={hero} alt="" />
          </figure>
          <div className="container-fluid">
            <div className="row">
              <div className="col-sm-12">
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default Home

export const pageQuery = graphql`
  query {
    hero: file(name: { eq: "home-garden" }) {
      childImageSharp {
        fluid(maxWidth: 2048) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`