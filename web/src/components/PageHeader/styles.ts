import styled from 'styled-components';

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    background-color: var(--color-primary);
`;

export const TopBar = styled.div `
    width: 90%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: var(--color-text-in-primary);
    padding: 1.6rem 0;

    img {
        height: 1.6rem;
    }

    > a {
        height: 3.2rem;
        transition: opacity 0.2s;
    }

    a:hover {
        opacity: 0.6;
    }
`;

export const Content = styled.div `
    width: 90%;
    margin: 0 auto;
    position: relative;
    margin: 2rem auto;

    strong {
        font: 700 3rem Archivo;
        line-height: 4.2rem;
        color: var(--color-title-in-primary);
    }

    p {
        max-width: 30rem;
        font-size: 1.4rem;
        line-height: 2rem;
        color: var(--color-text-in-primary);
        margin-top: 2rem;
    }
`;