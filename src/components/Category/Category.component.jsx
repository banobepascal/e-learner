import React from "react";
import { Card } from "react-bootstrap";

import { CategoryContainer } from "./Category.styles";

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
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Card.Title style={{ color: "#fc3c64" }}>
            {numberOfCourses} <span>courses</span>{" "}
          </Card.Title>
        </Card.Body>
      </Card>
    </CategoryContainer>
  );
};

export default Category;
