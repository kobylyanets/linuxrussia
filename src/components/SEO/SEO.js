import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import { getDescription, getImageUrl, getPageUrl, getTitle } from './helpers';
import siteConfig from '../../configs/site.config';
import socialConfig from '../../configs/social.config';

const twitterCardTags = (twitter, title, description, image) => {
  return [
    {
      name: `twitter:card`,
      content: `summary_large_image`,
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

const SEO = props => {
  const title = getTitle(props);
  const description = getDescription(props);
  const image = getImageUrl(props);
  const pageUrl = getPageUrl(props);
  return (
    <Helmet
      title={title}
      titleTemplate={`%s | ${siteConfig.SITE_NAME}`}
      meta={[]
        .concat(generalTags(description, image))
        .concat(
          openGraphTags(
            pageUrl,
            siteConfig.SITE_NAME,
            title,
            description,
            image,
            props.isBlogPost
          )
        )
        .concat(
          twitterCardTags(
            socialConfig.accounts.TWITTER,
            title,
            description,
            image
          )
        )}
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
