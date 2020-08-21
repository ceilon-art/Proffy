import styled from 'styled-components';

export const Container = styled.div `
    width: 100vw;
    height: 100vh;
`;

export const Main = styled.main `
    background-color: var(--color-box-base);
    width: 100%;
    max-width: 74rem;
    border-radius: 0.8rem;
    margin: 1.5rem auto 3.2rem;
    padding: 4.4rem;
    overflow: hidden;

    fieldset {
        border: 0;
        padding: 0 2.4rem;

        @media(min-width: 700px) {
            padding: 0 6.4rem;
        }
    }

    fieldset + fieldset {
        margin-top: 4.4rem;
    }

    @media(min-width: 700px) {
        margin-bottom: 0;
    }

    legend {
        font: 700 2.4rem Archivo;
        color: var(--color-text-title);
        margin-bottom: 2.4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding-bottom: 1.6rem;
        border-bottom: 1px solid var(--color-line-in-white);

        label {
            color: (--var-text-complement);
        }
    }

    @media (min-width: 700px) {
        max-width: 100vw;
    }
`;

export const Button = styled.button `
    background: none;
    border: 0;
    color: var(--color-primary);
    font: 700 1.6rem Archivo;
    cursor: pointer;
    transition: color 0.2s;

    &:hover {
        color: var(--color-primary-dark);
    }
`;

export const Footer = styled.div `
    padding: 4rem 2.4rem;
    background-color: var(--color-box-footer);
    border-top: 1px solid var(--color-line-in-white);
    margin-top: 6.4rem;

    p {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.4rem;
        line-height: 2.4rem;
        color: var(--color-text-complement);

        @media(min-width: 700px) {
            justify-content: center;
        }
    }

    img {
        margin-right: 2rem;
    }  
    
    @media(max-width: 700px) {
        padding: 4.0rem 6.4rem;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

export const FooterButton = styled.button `
        width: 20.4rem;
        margin-left: 10.5rem;
        height: 5.6rem;
        background-color: var(--color-secondary);
        color: var(--color-button-text);
        border: 0;
        border-radius: 0.8rem;
        cursor: pointer;
        font: 700 1.6rem Archivo;

        display: flex;
        align-items: center;
        justify-content: center;

        text-decoration: none;
        transition: background-color 0.2s;
        margin-top: 3.2rem;

        &:hover {
            background-color:  var(--color-secondary-dark);
        }

        @media(min-width: 860px) {
            margin-left: 36rem;
        }
`;