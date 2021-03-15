import React from 'react';
import {
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
  VKShareButton,
  VKIcon,
  OKShareButton,
  OKIcon,
  MailruShareButton,
  MailruIcon,
  TelegramShareButton,
  TelegramIcon,
  WhatsappShareButton,
  WhatsappIcon,
  ViberShareButton,
  ViberIcon,
  PocketShareButton,
  PocketIcon,
} from 'react-share';

const ShareBlock = ({ sharedUrl, title }) => {
  const ICON_SIZE = 36;
  const ICON_BORDER_RADIUS = 8;
  return (
    <>
      <h4 className="title is-size-5 is-mb-3 is-uppercase">Поделиться:</h4>
      <div className="buttons">
        <FacebookShareButton url={sharedUrl} quote={title} className="button">
          <FacebookIcon size={ICON_SIZE} borderRadius={ICON_BORDER_RADIUS} />
        </FacebookShareButton>

        <TwitterShareButton url={sharedUrl} title={title} className="button">
          <TwitterIcon size={ICON_SIZE} borderRadius={ICON_BORDER_RADIUS} />
        </TwitterShareButton>

        <VKShareButton url={sharedUrl} title={title} className="button">
          <VKIcon size={ICON_SIZE} borderRadius={ICON_BORDER_RADIUS} />
        </VKShareButton>

        <OKShareButton url={sharedUrl} title={title} className="button">
          <OKIcon size={ICON_SIZE} borderRadius={ICON_BORDER_RADIUS} />
        </OKShareButton>

        <MailruShareButton url={sharedUrl} title={title} className="button">
          <MailruIcon size={ICON_SIZE} borderRadius={ICON_BORDER_RADIUS} />
        </MailruShareButton>

        <TelegramShareButton url={sharedUrl} title={title} className="button">
          <TelegramIcon size={ICON_SIZE} borderRadius={ICON_BORDER_RADIUS} />
        </TelegramShareButton>

        <WhatsappShareButton
          url={sharedUrl}
          title={title}
          separator=":: "
          className="button"
        >
          <WhatsappIcon size={ICON_SIZE} borderRadius={ICON_BORDER_RADIUS} />
        </WhatsappShareButton>

        <ViberShareButton url={sharedUrl} title={title} className="button">
          <ViberIcon size={ICON_SIZE} borderRadius={ICON_BORDER_RADIUS} />
        </ViberShareButton>

        <PocketShareButton url={sharedUrl} title={title} className="button">
          <PocketIcon size={ICON_SIZE} borderRadius={ICON_BORDER_RADIUS} />
        </PocketShareButton>
      </div>
    </>
  );
};

export default ShareBlock;
