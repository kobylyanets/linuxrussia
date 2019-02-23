import React from 'react';
import { graphql, Link } from 'gatsby';

import Layout from '../../layouts/layout';
import SEO from '../../components/SEO/SEO';
import Pagination from '../../components/Pagination';
import { ExcerptPostItem } from '../blogPage';
import {
  getCategoryLabel,
  getCategoryDescription,
  getCategoryIcon,
  getCategoryUrl,
} from '../../utils/categoryUtils';

class CategoryPage extends React.Component {
  render() {
    const { page, pages, category } = this.props.pageContext;
    const posts =
      this.props.data.allMarkdownRemark &&
      this.props.data.allMarkdownRemark.edges.map(edge => edge.node);

    return (
      <Layout>
        <SEO />
        <div className="is-mb-4">
          <nav className="breadcrumb" aria-label="breadcrumbs">
            <ul>
              <li>
                <Link to="/">
                  <span className="icon">
                    <i className="fas fa-home" aria-hidden="true" />
                  </span>
                  <span>Главная</span>
                </Link>
              </li>
              <li className="is-active">
                <a>
                  <span className="icon">
                    <i
                      className={getCategoryIcon(category)}
                      aria-hidden="true"
                    />
                  </span>
                  <span>{getCategoryLabel(category)}</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="title">{`Рубрика: ${getCategoryLabel(category)}`}</div>
        <div className="subtitle">{getCategoryDescription(category)}</div>

        <hr style={{ height: '4px' }} />

        {posts && posts.length > 0 ? (
          <>
            <div className="content">
              {posts.map((post, index) => (
                <ExcerptPostItem key={index} post={post} />
              ))}
            </div>
            <Pagination
              pages={pages}
              page={page}
              pathPrefix={getCategoryUrl(category)}
            />
          </>
        ) : (
          <div className="title is-size-5 is-uppercase is-pt-2">
            Записей не найдено!
          </div>
        )}
      </Layout>
    );
  }
}

export const query = graphql`
  query CategoryListQuery($skip: Int!, $limit: Int!, $category: String!) {
    allMarkdownRemark(
      filter: {
        fileAbsolutePath: { regex: "/posts/" }
        frontmatter: { status: { ne: "template" }, category: { eq: $category } }
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
            category
            featuredImage {
              id
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          timeToRead
          excerpt(pruneLength: 300, format: PLAIN)
        }
      }
    }
  }
`;

export default CategoryPage;
