import styled from "styled-components";
import Background from "../../assets/bg.jpg";

export const CategoriesPageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-content: space-between;
  margin: 0 6.5vw;
  font-family: "Poppins", sans-serif;
  margin-bottom: 4em;
`;

export const CategoriesHeader = styled.div`
  height: 40vh;
  background: url(${Background});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  text-align: center;
  font-family: "Poppins", sans-serif;
  
  h4 {
    padding-top: 10%;
    text-transform: uppercase;
    font-weight: bold;
    color:  #fc3c64;
  }
`;
