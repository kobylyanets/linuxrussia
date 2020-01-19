import React from 'react';
import PropTypes from 'prop-types';
import ScrollUpButton from 'react-scroll-up-button';

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
    <ScrollUpButton
      ShowAtPosition={800}
      ContainerClassName="ScrollUpButton__Container"
      TransitionClassName="ScrollUpButton__Toggled"
    >
      <div>
        <span className="button is-info">
          <i className="fa fa-chevron-up" />
        </span>
      </div>
    </ScrollUpButton>
    <Footer />
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
