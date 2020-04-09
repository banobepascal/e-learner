import React from "react";
import { Card } from "react-bootstrap";

import {
  CategoryContainer,
  CategoryTitle,
  CategoryImg,
} from "./Category.styles";

const Category = ({ title, categoryImageUrl}) => {
  return (
    <CategoryContainer>
      <Card>
        <CategoryImg src={categoryImageUrl} />
        <Card.Body style={{ padding: "30px 35px" }}>
          <CategoryTitle>{title}</CategoryTitle>
        </Card.Body>
      </Card>
    </CategoryContainer>
  );
};

export default Category;
