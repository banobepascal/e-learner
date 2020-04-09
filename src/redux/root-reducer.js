import {combineReducers} from 'redux';

import categoriesReducer from './categories/categories.reducer';

export default combineReducers({
    categories: categoriesReducer
})