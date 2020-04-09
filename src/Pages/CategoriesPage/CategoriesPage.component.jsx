import React from "react";
import {Route} from "react-router-dom";

import CategoriesOverview from "../../components/Categories/Categories.component";
import CoursesOverview from "../../components/Courses-Overview/Courses-Overview.component";

const CategoriesPage = ({match}) => {
  return (
    <div>
    <Route exact path={`${match.path}`} component={CategoriesOverview}/>
    <Route path={`${match.path}/:categoryId`} component={CoursesOverview} />
    </div>
  );
};

export default CategoriesPage;
