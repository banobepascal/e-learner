import React from "react";

import CustomButton from "../Custom-Button/Custom-Button.component";
import {
  CurriculumnContainer,
  CourseContent,
} from "./Course-Curriculumn.styles";

const CourseCurriculumn = ({ courseContent }) => {
  const { lesson01, lesson02 } = courseContent;
  return (
    <CurriculumnContainer>
      <h5>Course Content</h5>
      <CourseContent>
        <p>{lesson01}</p>
        <CustomButton>Start</CustomButton>
      </CourseContent>
      <CourseContent>
        <p>{lesson02}</p>
        <CustomButton>Start</CustomButton>
      </CourseContent>
    </CurriculumnContainer>
  );
};

export default CourseCurriculumn;
