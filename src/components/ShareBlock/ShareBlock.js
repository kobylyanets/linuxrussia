import React from 'react';
import Helmet from 'react-helmet';

const ShareBlock = () => {
  return (
    <div>
      <Helmet>
        <script src="//yastatic.net/share2/share.js" />
      </Helmet>
      <h4 className="title is-size-5 is-mb-3 is-uppercase">Поделиться:</h4>
      <div
        className="ya-share2"
        data-counter
        data-services="vkontakte,odnoklassniki,twitter,telegram,moimir,facebook,collections"
      />
    </div>
  );
};

export default ShareBlock;
