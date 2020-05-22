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
  height: 30vh;
  background: url(${Background});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  text-align: center;
  font-family: "Poppins", sans-serif;

  ${getHeaderStyles}

  h4 {
    padding-top: 8%;
    text-transform: uppercase;
    font-weight: bold;
    color: #fc3c64;
  }

  h2 {
    padding-top: 5%;
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

  @media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    h4 {
      padding-top: 20%;
    }
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    h4 {
      padding-top: 30%;
    }
  }
`;
