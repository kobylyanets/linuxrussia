import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash.isempty';

const ExternalLink = ({ to, className, children, ...props }) => {
  if (_.isEmpty(to) || _.isEmpty(children)) {
    return null;
  }
  return (
    <a
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
  className: PropTypes.string,
};

ExternalLink.defaultProps = {
  className: undefined,
};

export default ExternalLink;
