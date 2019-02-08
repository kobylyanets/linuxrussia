import { CategoriesInfo } from '../configs/categoriesConfig';

const getCategoryLabel = (id) => {
  let category = CategoriesInfo[id];
  return (category && category.label) || '';
};

export {
  getCategoryLabel
}
