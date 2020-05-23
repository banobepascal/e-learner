import styled, { css } from "styled-components";
import Background from "../../assets/bg.jpg";

const courseDetails = css`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${Background}) center center, cover;
`;

const getHeaderStyles = (props) => {
  if (props.isCourseDetails) {
    return courseDetails;
  }
};

export const HeaderTitle = styled.div`
  background: url(${Background});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  text-align: center;
  font-family: "Poppins", sans-serif;

  ${getHeaderStyles}

  h4 {
    padding: 12vh 0;
    text-transform: uppercase;
    font-weight: bold;
    color: #fc3c64;
  }

  h2 {
    padding: 6vh 0.2em 0;
    color: #fc3c64;
    font-weight: bold;
  }

  p {
    color: #000;

    i {
      color: orange;
    }
    span {
      padding-left: 0.5em;
      color: #000;
    }
  }

  button {
    margin-bottom: 6vh;
  }

  @media only screen and (min-width: 320px) and (max-width: 480px) {
    h2 {
      font-size: 1.5em;
    }

    p {
      font-size: 0.8em;
    }
  }
`;
