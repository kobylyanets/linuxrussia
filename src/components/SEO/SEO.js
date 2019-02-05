import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const twitterCardTags = (twitter, title, description, image) => {
  return [
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: twitter,
    },
    {
      name: `twitter:title`,
      content: title,
    },
    {
      name: `twitter:description`,
      content: description,
    },
    {
      name: `twitter:image`,
      content: image,
    },
  ];
};

const openGraphTags = (
  url,
  site_name,
  title,
  description,
  image,
  isBlogPost
) => {
  return [
    {
      property: 'og:url',
      content: url,
    },
    {
      property: 'og:site_name',
      content: site_name,
    },
    {
      property: 'og:title',
      content: title,
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      property: 'og:image',
      content: image,
    },
    {
      property: 'og:type',
      content: isBlogPost ? 'article' : 'website',
    },
  ];
};

const generalTags = (description, image) => {
  return [
    {
      name: 'description',
      content: description,
    },
    {
      name: 'image',
      content: image,
    },
  ];
};

const getImage = (siteMetadata, src) => {
  return `${siteMetadata.url}${src}`;
};

const SEO = props => {
  return (
    <StaticQuery
      query={detailsQuery}
      render={data => {
        const {
          site: { siteMetadata },
          logo,
        } = data;
        const title = props.title || siteMetadata.title;
        const description = props.description || siteMetadata.description;
        const image = getImage(
          siteMetadata,
          props.imageURL || logo.edges[0].node.original.src
        );
        const url = props.url
          ? `${siteMetadata.url}${props.url}`
          : siteMetadata.url;
        return (
          <Helmet
            title={title}
            titleTemplate={`%s | ${siteMetadata.site_name}`}
            meta={[]
              .concat(generalTags(description, image))
              .concat(
                openGraphTags(
                  url,
                  siteMetadata.site_name,
                  title,
                  description,
                  image,
                  props.isBlogPost
                )
              )
              .concat(twitterCardTags(siteMetadata.twitter))}
          />
        );
      }}
    />
  );
};

SEO.defaultProps = {
  isBlogPost: false,
};

SEO.propTypes = {
  title: PropTypes.string,

  imageURL: PropTypes.string,
  description: PropTypes.string,

  isBlogPost: PropTypes.bool,
  meta: PropTypes.array,
  keywords: PropTypes.arrayOf(PropTypes.string),
};

export default SEO;

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        url
        site_name
        title
        description
        author
        twitter
      }
    }
    logo: allImageSharp(
      filter: { original: { src: { regex: "/linuxrussia-logo/" } } }
    ) {
      edges {
        node {
          original {
            src
          }
        }
      }
    }
  }
`;
