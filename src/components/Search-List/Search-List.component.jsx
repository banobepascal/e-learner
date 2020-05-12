import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCoursesSections,
  searchCourse,
} from "../../redux/courses/courses.selectors";
import SearchedCourse from "../../components/Searched-Course/Searched-Course.component";
import { CoursesPageContainer, CoursesContainer } from "./Search-List.styles";

const SearchList = ({ course }) => {
  return (
    <CoursesPageContainer>
      <CoursesContainer>
        {course.map(({ id, ...otherCourseProps }) => (
          <SearchedCourse key={id} {...otherCourseProps} />
        ))}
      </CoursesContainer>
    </CoursesPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  course: searchCourse(ownProps.match.params.title)(state),
});

export default connect(mapStateToProps)(SearchList);
