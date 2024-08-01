import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import Point from "../components/Point/Point";
import FlowOnImage from '../components/FlowOnImage/FlowOnImage';


const ServicePage = () => {
    return (
      <Layout>
        <FlowOnImage
          imageSrc="/images/story/PointBanner.jpg"
          Title="サービス"
          subTitle="SERVICE"
          />
        <Point/>
      </Layout>
    );
  };

export default ServicePage;

export const Head = () => {
    const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            image
          }
        }
      }
    `)

    const { title, description, siteUrl, image } = data.site.siteMetadata

    return (
      <>
       <title>{data.site.siteMetadata.title}</title>
       <meta name="description" content={data.site.siteMetadata.description} />
       {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${siteUrl}${image}`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={siteUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteUrl}${image}`} />
      </>
    );
  }
  