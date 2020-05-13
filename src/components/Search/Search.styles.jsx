import styled from "styled-components";

export const FormContainer = styled.div`
  width: 50%;
  margin-bottom: 0;
  display: flex;
  display: -ms-flexbox;

  button {
    width: 10%;
    padding: 11px;
    white-space: nowrap;
    color: #fff;
    border: 0;
    cursor: pointer;
    background: #fc3c64;
    transition: all 0.2s ease-out, color 0.2s ease-out;
    outline: none;

    &:hover {
      background: #e44f6e;
    }
  }
`;

export const InputField = styled.div`
  height: 2.9rem;
  width: 100%;

  input {
    height: 100%;
    background: #f2f2f2;
    border: 0;
    display: block;
    width: 100%;
    font-size: 16px;
    outline: none;
    padding-left: 1em;

    &:placeholder {
      color: #888;
      font-size: 16px;
    }
  }
`;
