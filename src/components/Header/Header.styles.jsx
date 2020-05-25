import styled from "styled-components";
import { Link } from "react-router-dom";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";

export const HeaderContainer = styled.div`
  height: 9vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  p {
    font-family: "Fredoka One", cursive;
    text-transform: uppercase;
    color: #fc3c64;
    font-size: 1.5em;
    padding-top: 16px;
  }
  &:hover {
    text-decoration: none;
  }

  @media only screen and (max-device-width: 760px) {
    padding-top: 0;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 760px) {
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

///// mobile header /////

export const MobileHeader = styled(Navbar)`
  background-color: #fff;

  @media only screen and (min-device-width: 760px) {
    display: none;
  }
`;

export const MobileNav = styled(Nav)`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
