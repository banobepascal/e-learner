import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCoursesSections } from "../../redux/courses/courses.selectors";
import CoursePreview from "../../components/Course-Preview/Course-Preview.component";
import {
  CoursesPageContainer,
  CoursesHeader,
  CoursesContainer,
} from "./Courses-Overview.styles";

const CoursesOverview = ({ courses }) => {
  return (
    <CoursesPageContainer>
      <CoursesHeader>
        <h4>Courses</h4>
      </CoursesHeader>
      <CoursesContainer>
        {courses.map(({ id, ...otherCourseProps }) => (
          <CoursePreview key={id} {...otherCourseProps} />
        ))}
      </CoursesContainer>
    </CoursesPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  courses: selectCoursesSections,
});

export default connect(mapStateToProps)(CoursesOverview);
