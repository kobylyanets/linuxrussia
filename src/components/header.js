import React from 'react';
import Helmet from 'react-helmet';
import TopMenu from './TopMenu/TopMenu';

class Header extends React.Component {
  render() {
    return (
      <>
        <Helmet
          htmlAttributes={{
            class: 'has-navbar-fixed-top',
          }}
        />
        <TopMenu />
      </>
    );
  }
}

export default Header;
