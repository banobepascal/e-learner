import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Course from "../Course/Course.component";
import HeaderImg from "../Header-Img/Header-Img.component";
import { selectMyCourses } from "../../redux/courses/courses.selectors";

import {MyCoursesPageContainer, MyCoursesContainer } from "./My-Courses-Overview.styles";
const MyCourses = ({ myCourses }) => {
  return (
    <MyCoursesPageContainer>
      <HeaderImg>
        <h4>My Courses</h4>
      </HeaderImg>
      <MyCoursesContainer>
        {myCourses.map((myCourse) => (
          <Course key={myCourse.id} {...myCourse} />
        ))}
      </MyCoursesContainer>
    </MyCoursesPageContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  myCourses: selectMyCourses,
});

export default connect(mapStateToProps)(MyCourses);
