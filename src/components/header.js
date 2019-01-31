import React from 'react';
import Helmet from 'react-helmet';
import TopBarMenu from './topBarMenu/topBarMenu';

class Header extends React.Component {
  render() {
    return (
      <>
        <Helmet
          htmlAttributes={{
            class: 'has-navbar-fixed-top',
          }}
        />
        <TopBarMenu />
      </>
    );
  }
}

export default Header;
