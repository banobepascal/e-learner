import React from "react";

import { DescriptionContainer } from "./Course-Description.styles";

const CourseDescription = ({description}) => {
  return (
    <DescriptionContainer>
      <h5>About Course</h5>
      <p>
        {description}
      </p>
    </DescriptionContainer>
  );
};

export default CourseDescription;
