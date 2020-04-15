import React from 'react'

import CustomButton from '../Custom-Button/Custom-Button.component';
import {CurriculumnContainer, CourseContent, StatusButton} from './Course-Curriculumn.styles';

const CourseCurriculumn = () => {
    return ( 
        <CurriculumnContainer>
          <h4>Course Outline</h4>
          <CourseContent>
            <p>Introduction Lesson</p>
            <StatusButton>
              <CustomButton>Start</CustomButton>
            </StatusButton>
          </CourseContent>
          <CourseContent>
            <p>Basics of HTML</p>
            <StatusButton>
              <CustomButton>Start</CustomButton>
            </StatusButton>
          </CourseContent>
        </CurriculumnContainer>
     );
}
 
export default CourseCurriculumn;