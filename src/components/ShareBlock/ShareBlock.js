import React from 'react';
import {
  VKShareButton,
  TwitterShareButton,
  TelegramShareButton,
  OKShareButton,
  FacebookShareButton
} from 'react-share';

const ShareBlock = ({ sharedUrl, title }) => {
  return (
    <>
      <h4 className="title is-size-5 is-mb-3 is-uppercase">Поделиться:</h4>
      <div className="buttons">
        <VKShareButton url={sharedUrl} title={title} className="button is-vk">
          <span className="icon">
            <i className="fab fa-vk fa-lg"/>
          </span>
        </VKShareButton>

        <TwitterShareButton url={sharedUrl} title={title} className="button is-twitter">
          <span className="icon">
            <i className="fab fa-twitter fa-lg"/>
          </span>
        </TwitterShareButton>

        <TelegramShareButton url={sharedUrl} title={title} className="button is-telegram">
          <span className="icon">
            <i className="fab fa-telegram-plane fa-lg"/>
          </span>
        </TelegramShareButton>

        <OKShareButton url={sharedUrl} title={title} className="button is-odnoklassniki">
          <span className="icon">
            <i className="fab fa-odnoklassniki fa-lg"/>
          </span>
        </OKShareButton>

        <FacebookShareButton url={sharedUrl} quote={title} className="button is-facebook">
          <span className="icon">
            <i className="fab fa-facebook-f fa-lg"/>
          </span>
        </FacebookShareButton>
      </div>
    </>
  );
};

export default ShareBlock;
