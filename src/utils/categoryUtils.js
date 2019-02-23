import { CategoriesInfo } from '../configs/categoriesConfig';

const getCategoryLabel = id => {
  let category = CategoriesInfo[id];
  return (category && category.label) || '';
};

const getCategoryDescription = id => {
  let category = CategoriesInfo[id];
  return (category && category.description) || '';
};

const getCategoryIcon = id => {
  let category = CategoriesInfo[id];
  return (category && category.icon) || '';
};

const getCategoryUrl = id => {
  let category = CategoriesInfo[id];
  return (category && category.url) || '';
};

export {
  getCategoryLabel,
  getCategoryDescription,
  getCategoryIcon,
  getCategoryUrl,
};
