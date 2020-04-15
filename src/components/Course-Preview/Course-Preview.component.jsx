import React from "react";
import {connect} from 'react-redux';

import Course from "../Course/Course.component";
import {CoursePreviews} from './Course-Preview.styles';
import {selectCourse} from '../../redux/courses/courses.selectors';

const CoursePreview = ({ course }) => {
  console.log(course)
  return (
    // <CoursePreviews>
    //   {courses.map(({id, ...courseProps}) => (
    //     <Course key={id} {...courseProps} />
    //   ))}
    // </CoursePreviews>
    <div></div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  course: selectCourse(ownProps.match.params.courseId)(state)
})

export default connect(mapStateToProps)(CoursePreview);
