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

  div p {
    color: #aaa;
    padding: 0;
  }

  p {
    padding: 0 4em;
  }

  i {
    display: none;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    p {
      padding: 0;
    }

    i {
      display: block;
      color: orange;

      span {
        color: #aaa;
      }
    }
  }
`;

export const Ratings = styled.div`
  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    display: none;
  }
`;

export const ReviewTitleContainer = styled.div`
  color: #000;
  display: flex;
  justify-content: space-between;
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
