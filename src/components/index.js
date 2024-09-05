import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import Demo01 from '../components/demo01/demo01';
import AboutSection from '../components/AboutSection/AboutSection';
import ServiceSection from '../components/ServiceSection/ServiceSection';
import CostSection from '../components/CostSection/CostSection';
import InviteSection from '../components/InviteSection/InviteSection';

const IndexPage = () => {
    return (
      <Layout>
        <Demo01 />
        <AboutSection />
        <ServiceSection />
        <CostSection />
        <InviteSection />
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

  const {
    title,
    description,
    siteUrl,
    image
  } = data.site.siteMetadata

  const metaTitle = pageTitle ? `${pageTitle} | ${title}` : title
  const metaDescription = pageDescription || description
  const metaImage = pageImage ? `${siteUrl}${pageImage}` : `${siteUrl}${image}`

  return (
    <>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="image" content={metaImage} />

      {/* OGPタグ */}
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:site_name" content={title} />

      {/* Twitter Card タグ */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
      
      {/* その他の重要なメタタグ */}
      <link rel="canonical" href={siteUrl} />
    </>
  );
}
