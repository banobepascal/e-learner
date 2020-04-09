import React from "react";
import {Route} from "react-router-dom";

import Categories from "../../components/Categories/Categories.component";
import Courses from "../../components/Courses/Courses.component";

const CategoriesPage = ({match}) => {
  return (
    <div>
    <Route exact path={`${match.path}`} component={Categories}/>
    <Route path={`${match.path}/:categoryId`} component={Courses} />
    </div>
  );
};

export default CategoriesPage;
