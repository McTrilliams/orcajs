import styled from 'styled-components';

export const Wrapper = styled.div`
    align-items: center;
    height: 500px;
    background: var(--white);
    padding: 0 20px;
`;

export const Content = styled.div`
    /* display: grid;
    grid-template-rows: 0.5fr 0.5fr 0.5fr 0.5fr;
    grid-template-areas:
        "sidebar main main main main"
        "sidebar content content content content";
    text-align: center;
    grid-gap: 0.2rem; */
    align-content: center;
    width: 100%;
    height: 500px;
    background: var(--lightGrey);
    margin: 0 auto;
    border-radius: 40px;
    color: var(--white);
    padding: 0.1rem;


    h1 {
        color: var(--medGrey);
    }

    h3 {
        color: var(--medGrey);
    }
`;

export const InpPreview = styled.textarea`
    width: 400px;
    height: 50vh;
    padding: 10px;
`;

export const CalcNameInput = styled.div`
        width: fit-content;
        justify-items: center;
        border-width: 2;
        border-style: solid;
        border-color: black;
        padding: 0.5em;
        
    input {
        width: 15ch;
    }
`;

