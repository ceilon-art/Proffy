import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div `
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--color-text-in-primary);
    background: var(--color-primary);

    overflow: hidden;
`; 

export const Logo = styled.div `
    height: 5rem;

        img {
            width: 100%;
            height: 6rem;
        }

        h2 {
            text-align: center;
            font-weight: 500;
            font-size: 2rem;
            line-height: 3rem;
        }
`;

export const LandingImage = styled.div` 
    display: flex;
    align-items: center;
    justify-content: center;

    margin-top: 11rem;
    width: 100%;
    height: 10rem;
`;

export const ButtonsContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 3rem 0; 
`;

export const StyledLink = styled(Link) `
    width: 20rem;
    height: 6.4rem;
    border-radius: 0.8rem;
    font: 700 1.7rem Archivo;
    margin-top: 5rem;
    padding: 2rem;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    text-decoration: none;
    color: var(--color-button-text);
    
    transition: background-color 0.2s;
    background: var(--color-primary-lighter);

    img {
        width: 3rem;
    }

    &:hover {
        background: var(--color-primary-light);
    }
`;

export const StyledLinkGive = styled(Link) `
    width: 20rem;
    height: 6.4rem;
    border-radius: 0.8rem;
    font: 700 1.7rem Archivo;
    margin-top: 5rem;
    padding: 2rem;
    margin-left: 2rem;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    text-decoration: none;
    color: var(--color-button-text);
    
    transition: background-color 0.2s;
    background: var(--color-secondary);

    img {
        width: 3rem;
    }

    &:hover {
        background: var(--color-secondary-dark);
    }
`;

export const TotalConnections = styled.div `
    font-size: 1.2rem;


    align-items: center;
    justify-content: center;
    display: flex;

    > img {
        margin-left: 0.8rem;
    }
`;