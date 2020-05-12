import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCoursesSections } from "../../redux/courses/courses.selectors";
import SearchedCourse from "../../components/Searched-Course/Searched-Course.component";
import {
  CoursesPageContainer,
  CoursesContainer,
} from "./Search-List.styles";

const CoursesOverview = ({ courses }) => {
  return (
    <CoursesPageContainer>
      <CoursesContainer>
        {courses.map(({ id, ...otherCourseProps }) => (
          <SearchedCourse key={id} {...otherCourseProps} />
        ))}
      </CoursesContainer>
    </CoursesPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  courses: selectCoursesSections,
});

export default connect(mapStateToProps)(CoursesOverview);
