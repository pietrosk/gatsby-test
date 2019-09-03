import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ReactPlayer from "react-player"

const SecondPage = () => {
  const data = useStaticQuery(graphql`
    query SecondPageQuery {
      allKenticoCloudItemYoutubeVideo {
        edges {
          node {
            elements {
              label {
                value
              }
              url {
                value
              }
            }
            system {
              id
              codename
            }
          }
        }
      }
    }
  `)

  const videos = data.allKenticoCloudItemYoutubeVideo.edges.map(edge => ({ url: edge.node.elements.url.value, title: edge.node.elements.label.value, id: edge.node.system.id }));

  return (
    <Layout>
      <SEO title="Videos page" />
      <h1>Wotepity videos</h1>
      <p>These are videos of Wotepity</p>
      {videos.map(video => (
        <>
          <div>asd</div>
          <ReactPlayer key={video.id} url={video.url} label={video.label} />
        </>
      ))}
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default SecondPage
