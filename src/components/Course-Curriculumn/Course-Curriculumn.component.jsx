import React from "react";

import CourseLesson from "../Course-Lesson/Course-Lesson.component";
import { CurriculumnContainer } from "./Course-Curriculumn.styles";

const CourseCurriculumn = ({ courseContent }) => {
  return (
    <CurriculumnContainer>
      <h5>Course Content</h5>
      {courseContent.map(({ id, ...otherLessonProps }) => (
        <CourseLesson key={id} {...otherLessonProps} />
      ))}
    </CurriculumnContainer>
  );
};

export default CourseCurriculumn;
