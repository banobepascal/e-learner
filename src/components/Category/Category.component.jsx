import React from "react";
import { Card } from "react-bootstrap";
import { withRouter } from "react-router-dom";

import {
  CategoryContainer,
  CategoryTitle,
  CategoryImg,
} from "./Category.styles";

const Category = ({ title, categoryImageUrl, linkUrl, match, history }) => {
  return (
    <CategoryContainer>
      <Card>
        <CategoryImg src={categoryImageUrl} />
        <Card.Body style={{ padding: "30px 35px" }}>
          <CategoryTitle
            onClick={() => history.push(`${match.path}/${linkUrl}`)}
          >
            {title}
          </CategoryTitle>
        </Card.Body>
      </Card>
    </CategoryContainer>
  );
};

export default withRouter(Category);
