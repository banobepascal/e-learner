import styled from "styled-components";

export const CourseDetailsContainer = styled.div`
  margin: 2em 6.5vw 4em;
`;

export const CourseNavbar = styled.div`
  height: 10vh;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 0 6.5vw;
  text-align: center;
`;

export const NavbarTabs = styled.div`
  animation: fadeEffect 1s;
  padding: 25px 0;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    border-bottom: 3px solid #fc3c64;
  }
`;

