import styled from 'styled-components';

export const Wrapper = styled.div`
    background: var(--darkGrey);
    padding: 0 20px;

`;

export const Content = styled.div`
    display: flex;
    align-items: right;
    justify-content: space-between;
    max-width: var(--maxWidth);
    padding: 20px 0;
    margin: 0 auto;
`;

export const MimeLogoImg = styled.img`
    width: 100px;
    @media screen and (max-width: 500px) {
        width: 50px;
    }
`;