import styled, { css } from "styled-components";
import Background from "../../assets/bg.jpg";

const courseDetails = css`
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${Background});
`;

const getHeaderStyles = (props) => {
  if (props.isCourseDetails) {
    return courseDetails;
  }
};

export const HeaderTitle = styled.div`
  height: 40vh;
  background: url(${Background});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  text-align: center;
  font-family: "Poppins", sans-serif;

  ${getHeaderStyles}

  h4 {
    padding-top: 10%;
    text-transform: uppercase;
    font-weight: bold;
    color: #fc3c64;
  }

  h2 {
    padding-top: 5%;
    color: #fff;
  }

  p {
    color: #fff;

    span {
      padding-left: 0.5em;
    }
  }
`;
