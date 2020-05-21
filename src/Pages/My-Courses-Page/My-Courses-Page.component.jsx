import React from "react";
import { Route } from "react-router-dom";

import MyCourses from '../../components/My-Courses-Overview/My-Courses-Overview.component';

const MyCoursesPage = ({ match }) => {
  return (
    <div>
      <Route exact path={`${match.path}`} component={MyCourses} />
    </div>
  );
};

export default MyCoursesPage;
