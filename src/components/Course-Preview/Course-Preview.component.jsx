import React from "react";
import { connect } from "react-redux";

import CourseDetails from "../Course-Details/Course-Details.component";
import { CoursePreviews } from "./Course-Preview.styles";
import { selectCourse } from "../../redux/courses/courses.selectors";

const CoursePreview = ({ course }) => {
  console.log(course);
  return (
    <div>
      <CourseDetails key={course.id} course={course} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  course: selectCourse(ownProps.match.params.slug)(state),
});

export default connect(mapStateToProps)(CoursePreview);
