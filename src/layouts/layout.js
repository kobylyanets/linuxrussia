import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/header';
import '../styles/style.scss';
import Footer from '../components/footer';
import SideBar from '../components/SideBar/SideBar';
import Helmet from 'react-helmet';

const Layout = ({ children }) => (
  <>
    <Helmet
      htmlAttributes={{
        lang: 'ru',
        class: 'has-navbar-fixed-top',
      }}
    />
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
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
