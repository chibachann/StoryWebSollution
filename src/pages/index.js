import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import Section01 from '../components/Section01/Section01';
import Section02 from '../components/Section02/Section02';
import Section03 from '../components/Section03/Section03';
import Section04 from '../components/Section04/Section04';
import Section05 from '../components/Section05/Section05';

const IndexPage = () => {
    return (
      <Layout>
        <Section01 />
        <Section02 />
        <Section03 />
        <Section04 />
        <Section05 />
      </Layout>
    );
  };

export default IndexPage;

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
    return (
      <>
       <title>{data.site.siteMetadata.title}</title>
       <meta name="description" content={data.site.siteMetadata.description} />
       <meta property="og:type" content="website" />
        <meta property="og:url" content={siteUrl} />
       <meta property="og:image" content={`${siteUrl}${image}`} />
      </>
    );
  }
  