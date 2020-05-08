import React from "react";
import { Route } from "react-router-dom";

import CoursePreview from "../../components/Course-Preview/Course-Preview.component";
import CoursesOverview from "../../components/Courses-Overview/Courses-Overview.component";

const CoursesPage = ({ match }) => {
  return (
    <div>
      <Route exact path={`${match.path}`} component={CoursesOverview} />
      <Route path={`${match.path}/course/:slug`} component={CoursePreview}/>
    </div>
  );
};

export default CoursesPage;
