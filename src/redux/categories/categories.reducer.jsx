import APP_DATA from "../App.data";

const INITIAL_STATE = {
  categories: APP_DATA
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default categoriesReducer;
