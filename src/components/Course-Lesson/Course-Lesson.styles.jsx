import styled from 'styled-components';

export const CourseContent = styled.div`
  background: #fff;
  display: flex;
  justify-content: space-between;
  padding: 5px 3vw;
  box-sizing: border-box;
  border: 1px solid #e5e5e5;
  margin-top: 1em;

  p {
    padding-top: 12px;
  }

  @media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
    button {
      height: 2em;
      padding: 1px 5px;
      margin-top: 0.8em;
    }
  }
`;