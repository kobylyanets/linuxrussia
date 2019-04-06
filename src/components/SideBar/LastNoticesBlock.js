import React from 'react';
import SideBarBlock from './SideBarBlock';
import { graphql, Link, StaticQuery } from 'gatsby';
import { getNoticeUrl } from '../../utils/urlUtils';

const LastNoticesBlock = () => {
  return (
    <SideBarBlock title={'Последние заметки'}>
      <StaticQuery
        query={graphql`
          query {
            result: allMarkdownRemark(
              filter: {
                fileAbsolutePath: { regex: "/notices/" }
                frontmatter: { status: { ne: "template" } }
              }
              sort: { order: DESC, fields: [frontmatter___date] }
              limit: 7
            ) {
              edges {
                node {
                  frontmatter {
                    title
                    author
                    date
                    url
                  }
                }
              }
            }
          }
        `}
        render={({ result }) => {
          const notices = result.edges.map(edge => edge.node.frontmatter);
          return (
            <div className="panel-list">
              {notices.map((notice, index) => (
                <Link
                  key={index}
                  className="panel-block"
                  to={getNoticeUrl(notice.url)}
                >
                  {notice.title}
                </Link>
              ))}
            </div>
          );
        }}
      />
    </SideBarBlock>
  );
};

export default LastNoticesBlock;
