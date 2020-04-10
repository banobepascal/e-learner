import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Course from "../../components/Course/Course.component";
import { selectCoursesCategories } from "../../redux/courses/courses.selectors";

import {
  CoursesContainer,
  CoursesHeader,
  CoursesPageContainer,
} from "./Courses-Overview.styles";

const CoursesOverview = ({ courseCategories }) => {
  return (
    <CoursesPageContainer>
      <CoursesHeader>
        <h4>Courses</h4>
      </CoursesHeader>
      <CoursesContainer>
        {courseCategories.map(({ id, ...otherCourseProps }) => (
          <Course key={id} {...otherCourseProps} />
        ))}
      </CoursesContainer>
    </CoursesPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  courseCategories: selectCoursesCategories(ownProps.match.params.category)(state)
})

export default connect(mapStateToProps)(CoursesOverview);
