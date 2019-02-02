import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `StaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.app/gatsby-image
 * - `StaticQuery`: https://gatsby.app/staticquery
 */

const renderImage = file => {
  return <Img fluid={file.node.childImageSharp.fluid} />;
};

const Image = ({ imageName }) => {
  if (!imageName) {
    return null;
  }

  return (
    <StaticQuery
      query={graphql`
        query {
          images: allFile(
            filter: {
              extension: { regex: "/(jpeg|jpg|png|gif)/" }
              sourceInstanceName: { eq: "images" }
            }
          ) {
            edges {
              node {
                extension
                relativePath
                childImageSharp {
                  fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={({ images }) =>
        renderImage(
          images.edges.find(image => image.node.relativePath === imageName)
        )
      }
    />
  );
};
export default Image;
