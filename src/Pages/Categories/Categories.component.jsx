import React, { Component } from "react";

import APP_DATA from "../../App.data";
import Category from "../../components/Category/Category.component";
import { CategoriesPageContainer, CategoriesHeader } from "./Categories.styles";

class CategoriesPage extends Component {
  state = {
    categories: APP_DATA,
  };
  render() {
    const { categories } = this.state;

    return (
      <div>
        <CategoriesHeader>
          <h4>
             Categories
          </h4>
        </CategoriesHeader>
        <CategoriesPageContainer>
          {categories.map(({ id, ...otherCollectionProps }) => (
            <Category key={id} {...otherCollectionProps} />
          ))}
        </CategoriesPageContainer>
      </div>
    );
  }
}

export default CategoriesPage;
