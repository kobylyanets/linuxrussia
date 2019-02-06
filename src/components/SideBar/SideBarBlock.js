import React from 'react';

const SideBarBlock = ({ title, children }) => {
  return (
    <div className="block">
      <h5 className="is-size-5 is-uppercase has-text-weight-semibold side-title">
        {title}
      </h5>
      <small>{children}</small>
    </div>
  );
};

export default SideBarBlock;
