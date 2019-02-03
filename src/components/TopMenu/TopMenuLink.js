import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import ExternalLink from '../core/ExternalLink';

const TopMenuLink = ({ isExternal, to, title, className }) => {
  if (isExternal) {
    return (
      <ExternalLink to={to} className={className}>
        {title}
      </ExternalLink>
    );
  } else {
    return (
      <Link to={to} className={className}>
        {title}
      </Link>
    );
  }
};

TopMenuLink.propTypes = {
  title: PropTypes.string,
  to: PropTypes.string,
  isExternal: PropTypes.bool,
  className: PropTypes.string,
};

TopMenuLink.defaultProps = {
  className: 'navbar-item',
};

export default TopMenuLink;
