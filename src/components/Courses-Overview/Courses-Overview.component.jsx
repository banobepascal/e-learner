import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import HeaderImg from '../Header-Img/Header-Img.component';
import { selectCoursesSections } from "../../redux/courses/courses.selectors";
import Course from "../../components/Course/Course.component";
import {
  CoursesPageContainer,
  CoursesContainer,
} from "./Courses-Overview.styles";

const CoursesOverview = ({ courses }) => {
  console.log(courses);
  return (
    <CoursesPageContainer>
      <HeaderImg>
        <h4>Courses</h4>
      </HeaderImg>
      <CoursesContainer>
        {courses.map(({ id, ...otherCourseProps }) => (
          <Course key={id} {...otherCourseProps} />
        ))}
      </CoursesContainer>
    </CoursesPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  courses: selectCoursesSections,
});

export default connect(mapStateToProps)(CoursesOverview);
