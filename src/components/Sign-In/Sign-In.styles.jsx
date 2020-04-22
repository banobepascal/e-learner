import styled from 'styled-components';
import {Card} from 'react-bootstrap';

export const AuthButtonsContainer = styled.div`
display: flex;
justify-content: space-between;
margin: 1.5em 0 1em 0;
`;

export const SignInContainer = styled.div`
margin-top: 2em;
font-family: "Poppins", sans-serif;
`;

export const SignInCard = styled(Card)`
margin: 0 auto;
width: 22rem;
text-align: center;

h3 {
    font-size: 24px;
}
`;

export const FormInput = styled.div`
    border: 1px solid #f2f2f2;
    margin-top: 1em;
    display: flex;
    padding: 10px;
    text-align: center;

    i {
        padding: 10px;
        font-size: 20px;
    }
    input {
        border: none;
        width: 100%;
        font-size: 14px;
        outline: none;
    }
`;
