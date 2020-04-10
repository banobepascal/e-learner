import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCoursesSections } from "../../redux/courses/courses.selectors";
import CoursePreview from "../../components/Course-Preview/Course-Preview.component";
import {
  CoursesPageContainer,
  CoursesHeader,
  CoursesContainer,
} from "./Courses-Page.styles";

const CoursesPage = ({ courses }) => {
  return (
    <CoursesPageContainer>
      <CoursesHeader>
        <h4>Courses</h4>
      </CoursesHeader>
      <CoursesContainer>
        {courses.map(({ id, ...otherCollectionProps }) => (
          <CoursePreview key={id} {...otherCollectionProps} />
        ))}
      </CoursesContainer>
    </CoursesPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  courses: selectCoursesSections,
});

export default connect(mapStateToProps)(CoursesPage);
