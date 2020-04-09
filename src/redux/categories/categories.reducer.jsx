import CATEGORIES_DATA from "./categories.data";

const INITIAL_STATE = {
  categories: CATEGORIES_DATA
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default categoriesReducer;
