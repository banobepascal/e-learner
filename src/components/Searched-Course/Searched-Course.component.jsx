import React from "react";

import {
  ListGroupContainer,
  CourseImage,
  CourseLink,
  CourseDetails,
  TitleAndRatings,
  AuthorContainer,
} from "./Searched-Course.styles";

const SearchedCourse = ({
  courseImageUrl,
  title,
  description,
  authorName,
  ratings,
  slug,
}) => {
  return (
    <ListGroupContainer horizontal>
      <CourseImage src={courseImageUrl} />
      <CourseDetails>
        <TitleAndRatings>
          <CourseLink to={`/courses/course/${slug}`}>
            <h1>{title}</h1>
          </CourseLink>
          <i className="fa fa-star" aria-hidden="true">
            {" "}
            <span>{ratings}</span>
          </i>
        </TitleAndRatings>
        <p>{description}</p>
        <AuthorContainer>
          <p>By {authorName}</p>
        </AuthorContainer>
      </CourseDetails>
    </ListGroupContainer>
  );
};

export default SearchedCourse;
