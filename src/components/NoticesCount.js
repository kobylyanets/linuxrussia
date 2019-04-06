import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const NoticesCount = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          result: allMarkdownRemark(
            filter: { fileAbsolutePath: { regex: "/notices/" } }
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

export default NoticesCount;
