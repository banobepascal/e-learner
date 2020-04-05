import styled from "styled-components";
import BackgroundImage from "../../assets/bg2.jpg";

export const HomepageContainer = styled.div`
  width: 100%;
  height: 88vh;
  font-family: "Poppins", sans-serif;
`;

export const MainSection = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  background-image: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0.5)
    ),
    url(${BackgroundImage});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  text-align: center;

  h1 {
    font-weight: 700;
    padding-top: 10%;
    color: #fff;
  }

  p {
      color: #f2f2f2;
  }
`;

export const StartedButton = styled.div`
  width: 160px;
  margin: 5% auto;

  &:hover {
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.3);
  }
`;

// export const FeatureContainer = styled.div`
//   margin: 8% auto 0 auto;
//   width: 50%;
//   display: flex;
//   justify-content: space-between;
// `;

// export const Feature = styled.div`
//   width: 100%; 
// `;

// export const FeatureTitle = styled.div`
//   background: rgba(255, 255, 255, 0.15);
//   padding: 5px 20px;

//   h4 {
//     font-size: 1.1em;
//   }
// `;

// export const FeatureDescription = styled.div`
//   padding: 20px 20px;
//   background: #fff;
//   height: 22vh;
// `;
