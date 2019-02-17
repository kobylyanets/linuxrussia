import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const ArticlesCount = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          result: allMarkdownRemark(
            filter: { frontmatter: { status: { eq: "published" } } }
          ) {
            totalCount
          }
        }
      `}
      render={({ result }) => {
        return (
          <div className="has-text-centered has-text-weight-bold is-size-4">
            {result.totalCount}
          </div>
        );
      }}
    />
  );
};

export default ArticlesCount;
