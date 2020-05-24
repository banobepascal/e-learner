import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  height: 9vh;
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  box-sizing: border-box;
  background-color: #fff;
  font-family: "Poppins", sans-serif;
  font-size: 1em;
  color: #000;
  overflow: hidden;

  @media screen and (min-width: 1824px) {
    padding: 0 20vw;
  }
`;

export const LogoContainer = styled(Link)`
    font-family: "Fredoka One", cursive;
    text-transform: uppercase;
    color: #fc3c64;
    font-size: 1.5em;
    align-items: center;
    display: flex;
    padding: 12px 15px;

  &:hover {
    text-decoration: none;
    color: #fc3c64;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (min-device-width: 220px) and (max-device-width: 760px) {
   display: none;
  }
`;

export const OptionLinks = styled(Link)`
  margin: 0 2em;
  padding: 12px 15px;
  color: rgb(95, 93, 93);

  &:hover {
    text-decoration: none;
    color: rgb(95, 93, 93);
    background-color: #f2f2f2;
    padding: 8px 15px;
  }
`;
