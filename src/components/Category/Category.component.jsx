import React from "react";
import { Card } from "react-bootstrap";
import { withRouter } from "react-router-dom";

import {
  CategoryContainer,
  CategoryTitle,
  CategoryImg,
} from "./Category.styles";

const Category = ({
  title,
  categoryImageUrl,
  courses,
  routeName,
  history,
  match,
}) => {
  return (
    <CategoryContainer>
      <Card>
        <CategoryImg src={categoryImageUrl} />
        <Card.Body style={{ padding: "30px 35px" }}>
          <CategoryTitle
            onClick={() => history.push(`${match.path}/${routeName}`)}
          >
            {title}
          </CategoryTitle>
          <Card.Text style={{ color: "#fc3c64" }}>
            {courses.length} <span>courses</span>{" "}
          </Card.Text>
        </Card.Body>
      </Card>
    </CategoryContainer>
  );
};

export default withRouter(Category);
