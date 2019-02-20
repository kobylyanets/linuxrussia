import logo from '../../../images/linuxrussia-logo.png';
import {
  HOME_PATH,
  SITE_URL,
  TITLE,
  DESCRIPTION,
} from '../../../configs/site.config';
import { getAbsolutePostUrl } from '../../../utils/urlUtils';

const getTitle = ({ title }) => {
  return title || TITLE;
};

const getDescription = ({ description }) => {
  const result = description || DESCRIPTION;
  return result.trim();
};

const getPageUrl = ({ url }) => {
  return url ? getAbsolutePostUrl(url) : `${SITE_URL}${HOME_PATH}`;
};

const getImageUrl = ({ imageURL }) => {
  const imagePath = imageURL || logo;
  return `${SITE_URL}${imagePath}`;
};

export { getTitle, getDescription, getImageUrl, getPageUrl };
