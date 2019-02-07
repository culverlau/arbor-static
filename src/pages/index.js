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
        <section
          className="hero-section"
          style={{ height: `${this.state.height}px` }}
        >
          <figure>
            <Img fluid={hero} alt="" />
          </figure>
          <div className="container">
            <div className="row">
              <div className="col-sm-12">
                <div className="hero-content">
                  <h1>Show, Trade, Learn</h1>
                  <h2>The home garden app for your community</h2>
                  <a href="" class="btn">
                    Click to learn more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-md-3">
                <a href="">
                  <div className="">
                    <Img alt="" />
                    <h3>Feature</h3>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <div className="">
                  <h3>Feature</h3>
                  <p>some text here</p>
                  <a href="" class="btn">
                    Click to learn more
                  </a>
                </div>
              </div>
              <div className="col-sm-12 col-md-6">
                <div className="">
                  <Img alt="" />
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
