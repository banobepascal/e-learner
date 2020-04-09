import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCategoriesSections } from "../../redux/categories/categories.selectors";
import Category from "../Category/Category.component";
import { CategoriesPageContainer, CategoriesHeader } from "./Categories.styles";

const CategoriesPage = ({ categories }) => {
  return (
    <div>
      <CategoriesHeader>
        <h4>Categories</h4>
      </CategoriesHeader>
      <CategoriesPageContainer>
        {categories.map(({ id, ...otherCollectionProps }) => (
          <Category key={id} {...otherCollectionProps} />
        ))}
      </CategoriesPageContainer>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  categories: selectCategoriesSections,
});

export default connect(mapStateToProps)(CategoriesPage);
