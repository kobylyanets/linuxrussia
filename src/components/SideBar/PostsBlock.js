import React from 'react';
import { Link } from 'gatsby';

import SideBarBlock from '../SideBar/SideBarBlock';

const PostsBlock = ({ config: { links, title, hasZeroIndex = false } }) => {
  return (
    <SideBarBlock title={title}>
      <div className="panel-list">
        {links.map((link, index) => (
          <Link key={index} className="panel-block" to={link.to}>
            {`${hasZeroIndex ? index : index + 1}. ${link.label}`}
          </Link>
        ))}
      </div>
    </SideBarBlock>
  );
};

export default PostsBlock;
