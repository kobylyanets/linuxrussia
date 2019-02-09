import { CategoriesInfo } from '../configs/categoriesConfig';

const getCategoryLabel = id => {
  let category = CategoriesInfo[id];
  return (category && category.label) || '';
};

const getCategoryDescription = id => {
  let category = CategoriesInfo[id];
  return (category && category.description) || '';
};

export { getCategoryLabel, getCategoryDescription };
