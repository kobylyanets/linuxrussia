import React from 'react';

import { SRLWrapper } from 'simple-react-lightbox';

const options = {
  settings: {
    disableKeyboardControls: true,
    disablePanzoom: false,
    disableWheelControls: false,
  },
  buttons: {
    showAutoplayButton: false,
    showCloseButton: true,
    showDownloadButton: false,
    showFullscreenButton: false,
    showNextButton: false,
    showPrevButton: false,
    showThumbnailsButton: false,
    size: '40px'
  },
  thumbnails: {
    showThumbnails: false,
  },
  caption: {
    showCaption: false,
  },
};

export const LightboxWrapper = ({ children }) => {
  return <SRLWrapper options={options}>{children}</SRLWrapper>;
};
