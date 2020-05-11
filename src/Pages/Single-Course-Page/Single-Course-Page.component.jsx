import React from "react";
import { Route } from "react-router-dom";

import CoursePreview from "../../components/Course-Preview/Course-Preview.component";

const SingleCoursePage = ({ match }) => {
  return (
    <div>
      <Route path={`${match.path}/:slug`} component={CoursePreview}/>
    </div>
  );
};

export default SingleCoursePage;
