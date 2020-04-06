import React, { Component } from "react";

import APP_DATA from "./Categories.data";
import Category from "../../components/Category/Category.component";
import { CategoriesPageContainer, CategoryHeader } from "./Categories.styles";

class Categories extends Component {
  state = {
    categories: APP_DATA,
  };
  render() {
    const { categories } = this.state;

    return (
      <div>
        <CategoryHeader>
          <h4>
             Categories
          </h4>
        </CategoryHeader>
        <CategoriesPageContainer>
          {categories.map(({ id, ...otherCollectionProps }) => (
            <Category key={id} {...otherCollectionProps} />
          ))}
        </CategoriesPageContainer>
      </div>
    );
  }
}

export default Categories;
