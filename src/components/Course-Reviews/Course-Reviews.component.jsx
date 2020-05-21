import React from "react";
import ReactStars from "react-stars";

import {
  ReviewContainer,
  ReviewsContent,
  ReviewTitleContainer,
  ReviewAuthorDetails,
} from "./Course-Reviews.styles";
const CourseReviews = ({ ratings, authorImageUrl, authorName }) => {
  return (
    <ReviewContainer>
      <h5>Reviews</h5>
      <ReviewsContent>
        <ReviewTitleContainer>
          <ReviewAuthorDetails>
            <img src={authorImageUrl} alt="" />
            <div>
              <div>{authorName}</div>
              <i>2 weeks ago</i>
            </div>
          </ReviewAuthorDetails>
          <div>
            <ReactStars count={ratings} size={24} color1={"#ffd700"} />
          </div>
        </ReviewTitleContainer>
        <p>
          The lessons are prepared in a short and crisp fashion and in an easy
          language, which makes it easier for me to understand the concept. They
          are also well structured so that no part of any topic is left out.
        </p>
      </ReviewsContent>
      <ReviewsContent>
        <ReviewTitleContainer>
          <ReviewAuthorDetails>
            <img src={authorImageUrl} alt="" />
            <div>
              <div>{authorName}</div>
              <i>1 weeks ago</i>
            </div>
          </ReviewAuthorDetails>
          <div>
            <ReactStars count={ratings} size={24} color1={"#ffd700"} />
          </div>
        </ReviewTitleContainer>
        <p>
          Its been an awesome experience so far. Its practically my first online
          full option training
        </p>
      </ReviewsContent>
    </ReviewContainer>
  );
};

export default CourseReviews;
