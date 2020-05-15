import React from "react";
import { Route } from "react-router-dom";

import CoursePreviewContainer from "../../components/Course-Preview/Course-Preview-Container.component";

const SingleCoursePage = ({ match }) => {
  return (
    <div>
      <Route path={`${match.path}/:slug`} component={CoursePreviewContainer} />
    </div>
  );
};

export default SingleCoursePage;
