import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash.isempty';

import TopMenuLink from './TopMenuLink';

const TopMenuLinkList = ({ links, className }) => {
  if (isEmpty(links)) {
    return null;
  }

  return (
    <div className={className}>
      {links.map((link, index) => (
        <TopMenuLink key={index} {...link} />
      ))}
    </div>
  );
};

TopMenuLinkList.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string,
      isExternal: PropTypes.bool,
    })
  ).isRequired,
  className: PropTypes.string,
};

TopMenuLinkList.defaultProps = {
  className: 'navbar-end',
};

export default TopMenuLinkList;
