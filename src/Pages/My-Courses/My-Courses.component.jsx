import React from "react";
import { connect } from "react-redux";

import Course from "../../components/Course/Course.component";
import HeaderImg from "../../components/Header-Img/Header-Img.component";

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

const mapStateToProps = (state) => ({
  myCourses: state.myCourses,
});

export default connect(mapStateToProps)(MyCourses);
