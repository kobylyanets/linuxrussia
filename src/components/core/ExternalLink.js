import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash.isempty';

const ExternalLink = ({ to, className, children, key }) => {
  if (isEmpty(to) || isEmpty(children)) {
    return null;
  }
  return (
    <a
      key={key}
      href={to}
      className={className}
      target="_blank"
      rel="nofollow noopener noreferrer"
    >
      {children}
    </a>
  );
};

ExternalLink.propTypes = {
  to: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
  key: PropTypes.number,
};

export default ExternalLink;
