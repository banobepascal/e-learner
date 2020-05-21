import styled from "styled-components";

export const ReviewContainer = styled.div`
  font-family: "Poppins", sans-serif;
  margin-top: 2em;

  h5 {
    font-weight: bold;
    color: #000;
  }
`;

export const ReviewsContent = styled.div`
  border: solid 1px #e5e5e5;
  border-radius: 3px;
  padding: 10px 3vw;
  margin-top: 1em;
  background: #fff;

  div i {
    color: #aaa;
    padding-right: 5px;
  }

  p {
    padding:0 4em;
  }
`;

export const ReviewTitleContainer = styled.div`
  color: #000;
  display: flex;
  justify-content: space-between;
padding: 1em 0;
`;

export const ReviewAuthorDetails = styled.div`
  display: flex;

  img {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    margin-right: 1em;
  }
`;
