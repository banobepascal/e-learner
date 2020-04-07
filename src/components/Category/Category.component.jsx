import React from "react";
import { Card } from "react-bootstrap";

import { CategoryContainer, CategoryTitle } from "./Category.styles";

const Category = ({
  title,
  categoryImageUrl,
  numberOfCourses,
  description,
}) => {
  return (
    <CategoryContainer>
      <Card>
        <Card.Img variant="top" src={categoryImageUrl} />
        <Card.Body style={{ padding: "40px 35px" }}>
          <CategoryTitle>{title}</CategoryTitle>
          <Card.Text>{description}</Card.Text>
          <Card.Text style={{ color: "#fc3c64" }}>
            {numberOfCourses} <span>courses</span>{" "}
          </Card.Text>
        </Card.Body>
      </Card>
    </CategoryContainer>
  );
};

export default Category;
