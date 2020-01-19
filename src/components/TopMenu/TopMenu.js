import React from 'react';
import { Link } from 'gatsby';
import menuConfig from '../../configs/menuConfig';
import TopMenuLinkList from './TopMenuLinkList';

class TopMenu extends React.Component {
  state = { showMenu: false };

  toggleMenu = () => {
    this.setState({
      showMenu: !this.state.showMenu,
    });
  };

  links = menuConfig.menuLinks;

  render() {
    const cssActiveClass = this.state.showMenu ? 'is-active' : '';
    return (
      <nav
        className="navbar is-dark is-fixed-top"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item is-size-4-desktop" to="/">
              LinuxRussia.com
            </Link>
            {/*<div className="navbar-item">*/}
            {/*  <span className="tag is-danger">Beta</span>*/}
            {/*</div>*/}
            <a
              role="button"
              className={`navbar-burger burger ${cssActiveClass}`}
              aria-label="menu"
              aria-expanded="false"
              data-target="topNavbar"
              onClick={this.toggleMenu}
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>

          <div id="topNavbar" className={`navbar-menu ${cssActiveClass}`}>
            <TopMenuLinkList links={this.links} />
          </div>
        </div>
      </nav>
    );
  }
}

export default TopMenu;
