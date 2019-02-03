import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from '../components/header';
import '../styles/style.scss';
import Footer from '../components/footer';
import SideBar from '../components/SideBar/SideBar';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header />
        <section className="section">
          <div className="container">
            <div className="columns is-variable is-8">
              <div className="column is-8">{children}</div>
              <SideBar />
            </div>
          </div>
        </section>
        <Footer />
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
