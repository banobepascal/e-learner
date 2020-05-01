import React from "react";
import { connect } from "react-redux";
import {createStructuredSelector} from 'reselect';

import Course from "../../components/Course/Course.component";
import HeaderImg from "../../components/Header-Img/Header-Img.component";
import { selectMyCourses } from "../../redux/courses/courses.selectors";

const MyCourses = ({ myCourses }) => {
  return (
    <div>
      <HeaderImg>
        <h4>My Courses</h4>
      </HeaderImg>
      {myCourses.map((myCourse) => (
        <Course key={myCourse.id} {...myCourse} />
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  myCourses: selectMyCourses
});

export default connect(mapStateToProps)(MyCourses);
