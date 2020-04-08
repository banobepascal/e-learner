import styled from 'styled-components';
import { Card } from "react-bootstrap";

export const CategoryContainer = styled.div`
   padding-top: 2em;
   width: 26.5vw;
`;

export const CategoryImg = styled(Card.Img)`
   height: 200px;
`;

export const CategoryTitle = styled(Card.Title)`
   &:hover {
      color: #fc3c64;
      cursor: pointer;
   }
`