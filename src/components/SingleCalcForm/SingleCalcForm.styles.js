import styled from 'styled-components';

export const Wrapper = styled.div`
    align-items: center;
    height: 500px;
    background: var(--white);
    padding: 0 20px;
`;

export const Content = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 2rem;
    max-width: var(--maxWidth);
    width: 100%;
    height: 500px;
    background: var(--lightGrey);
    margin: 0 auto;
    border-radius: 40px;
    color: var(--white);
    padding: 30px 20px;


    h1 {
        color: var(--medGrey);
    }

    h3 {
        color: var(--medGrey);
    }
`;

export const AdvOptionsButtonWrapper = styled.button`
    display: block;
    background: var(--darkGrey);
    width: 25%;
    min-width: 200px;
    height: 60px;
    border-radius: 30px;
    color: var(--white);
    border: 0;
    font-size: var(--fontBig);
    margin: 20px auto;
    transition: all 0.3s;
    outline: none;
    cursor: pointer;

    :hover {
        opacity: 0.8;
    }
`;

export const CalcNameInput = styled.div`

`;