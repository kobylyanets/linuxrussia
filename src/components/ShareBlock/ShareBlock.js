import React from 'react';
import {
  TwitterShareButton,
  TwitterIcon,

  VKShareButton,
  VKIcon,
} from 'react-share';

const ShareBlock = ({ sharedUrl, title }) => {
  const ICON_SIZE = 36;
  const ICON_BORDER_RADIUS = 8;
  return (
    <>
      <h4 className="title is-size-5 is-mb-3 is-uppercase">Поделиться:</h4>
      <div className="buttons">
        <VKShareButton url={sharedUrl} title={title} className="button">
          <VKIcon size={ICON_SIZE} borderRadius={ICON_BORDER_RADIUS} />
        </VKShareButton>

        <TwitterShareButton url={sharedUrl} title={title} className="button">
          <TwitterIcon size={ICON_SIZE} borderRadius={ICON_BORDER_RADIUS} />
        </TwitterShareButton>

        {/*<TelegramShareButton*/}
        {/*  url={sharedUrl}*/}
        {/*  title={title}*/}
        {/*  className="button is-telegram"*/}
        {/*>*/}
        {/*  <span className="icon">*/}
        {/*    <i className="fab fa-telegram-plane fa-lg" />*/}
        {/*  </span>*/}
        {/*</TelegramShareButton>*/}

        {/*<OKShareButton*/}
        {/*  url={sharedUrl}*/}
        {/*  title={title}*/}
        {/*  className="button is-odnoklassniki"*/}
        {/*>*/}
        {/*  <span className="icon">*/}
        {/*    <i className="fab fa-odnoklassniki fa-lg" />*/}
        {/*  </span>*/}
        {/*</OKShareButton>*/}

        {/*<FacebookShareButton*/}
        {/*  url={sharedUrl}*/}
        {/*  quote={title}*/}
        {/*  className="button is-facebook"*/}
        {/*>*/}
        {/*  <span className="icon">*/}
        {/*    <i className="fab fa-facebook-f fa-lg" />*/}
        {/*  </span>*/}
        {/*</FacebookShareButton>*/}
      </div>
    </>
  );
};

export default ShareBlock;
