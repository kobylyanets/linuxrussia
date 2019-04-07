import React from 'react';
import Layout from '../layouts/layout';
import { graphql } from 'gatsby';
import NoticeCard from '../components/NoticeCard/NoticeCard';
import Pagination from '../components/Pagination';
import { NOTICES_PREFIX } from '../configs/site.config';
import SEO from '../components/SEO/SEO';

const NoticesPage = ({ data, ...props }) => {
  const { page, pages } = props.pageContext;
  const notices = data.allMarkdownRemark.edges.map(edge => edge.node);

  const renderColumns = (cols, rowIndex) => (
    <div key={rowIndex} className="columns is-variable">
      {cols}
    </div>
  );

  const renderColumn = (notice, index) => (
    <div key={index} className="column is-6">
      <NoticeCard {...notice} />
    </div>
  );

  const renderTwoColumnsTable = () => {
    let colIndex = 0;
    let rowIndex = 0;
    const table = [];
    let columns = [];
    const lastIndex = notices.length - 1;
    notices.forEach((notice, index) => {
      columns.push(renderColumn(notice, index));
      colIndex++;
      if (colIndex === 2 || index === lastIndex) {
        colIndex = 0;
        table.push(renderColumns(columns, rowIndex));
        rowIndex++;
        columns = [];
      }
    });
    return table;
  };

  const title = 'Заметки о Linux / Ubuntu';
  const description = 'Своеобразный блокнот с короткими заметками о Linux / Ubuntu';

  return (
    <Layout>
      <SEO title={title} description={description}/>
      <div className="title">{title}</div>
      <div className="subtitle">{description}</div>

      <div className="block">{renderTwoColumnsTable()}</div>

      <hr style={{ height: '4px' }} />

      <Pagination pages={pages} page={page} pathPrefix={NOTICES_PREFIX} />
    </Layout>
  );
};

export default NoticesPage;

export const query = graphql`
  query NoticesListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/notices/" }
        frontmatter: { status: { ne: "template" } }
      }
      sort: { order: DESC, fields: [frontmatter___date] }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "DD MMM YYYY", locale: "RU")
            url
            author
          }
          excerpt(pruneLength: 100, format: PLAIN)
        }
      }
    }
  }
`;
