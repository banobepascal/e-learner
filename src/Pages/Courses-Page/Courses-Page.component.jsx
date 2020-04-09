import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCoursesSections } from "../../redux/courses/courses.selectors";
import Course from "../../components/Course/Course.component";
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
          <Course key={id} {...otherCollectionProps} />
        ))}
      </CoursesContainer>
    </CoursesPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  courses: selectCoursesSections,
});

export default connect(mapStateToProps)(CoursesPage);
