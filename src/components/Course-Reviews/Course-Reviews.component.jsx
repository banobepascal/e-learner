import React from "react";

import {
  ReviewContainer,
  ReviewsContent,
  ReviewTitleContainer,
  ReviewAuthorDetails,
} from "./Course-Reviews.styles";
const CourseReviews = ({ reviews, ratings }) => {
  return (
    <ReviewContainer>
      <h5>Reviews</h5>
      <ReviewsContent>
        <ReviewTitleContainer>
          <ReviewAuthorDetails>
            <div>image</div>
            <div>
              <div>author name</div>
              <div>date</div>
            </div>
          </ReviewAuthorDetails>
          <div>{ratings}</div>
        </ReviewTitleContainer>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          adipisci, saepe explicabo obcaecati et aliquam molestias ipsa magni
          beatae cum accusantium sint sunt repudiandae ratione doloremque
          dolorem quia at architecto?
        </p>
      </ReviewsContent>
    </ReviewContainer>
  );
};

export default CourseReviews;
