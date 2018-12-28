import { graphql } from 'gatsby'
import React from 'react'
import get from 'lodash/get'
import Img from 'gatsby-image'

import { siteMetadata } from '../../gatsby-config'
import Post from 'templates/Post'
import Meta from 'components/Meta'
import Layout from 'components/Layout'

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = { height: 0 }
    this.windowHeight = this.windowHeight.bind(this)
  }

  componentDidMount() {
    this.windowHeight()
    window.addEventListener('resize', this.windowHeight)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.windowHeight)
  }

  windowHeight() {
    this.setState({ height: window.innerHeight })
  }

  render() {
    const { location, data } = this.props
    const hero = get(data, 'hero.childImageSharp.fluid')

    return (
      <Layout location={location}>
        <Meta site={siteMetadata} title="Home" />
        <section className="hero-section" style={{ height: `${ this.state.height }px` }}>
          <figure>
            <Img fluid={hero} alt="" />
          </figure>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="hero-content">
                  <h1>Show, Trade, Learn</h1>
                  <h2>The home garde app for your community</h2>
                  <button>Click to learn more</button>
                </div>
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