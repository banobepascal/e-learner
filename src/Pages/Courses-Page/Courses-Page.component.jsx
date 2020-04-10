import React from "react";
import { Route } from "react-router-dom";

import CoursesOverview from "../../components/Courses-Overview/Courses-Overview.component";

const CoursesPage = ({ match }) => {
  console.log(match);
  return (
    <div>
      <Route exact path={`${match.path}`} component={CoursesOverview} />
    </div>
  );
};

export default CoursesPage;
