import styled from 'styled-components';

export const Container = styled.div `
    width: 100vw;
    height: 100vh;

    @media(min-width: 700px) {
        max-width: 100%;
    }
`;

export const Formulary = styled.div `
    margin-top: 3.2rem;

    @media(min-width: 700px) {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 16px;
        position: absolute;
        bottom: -98px;
    }

    label {
        color: var(--color-text-in-primary);
    }

    button {
        position: relative;
        width: 100%;
        height: 5.6rem;
        /* margin-top: 30.6rem; */
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
        margin-top: 8.2rem;

        &:hover {
            background-color: var(--color-secondary-dark);
        }
    }
`;

export const Main = styled.div `
    margin: 3.2rem;
    width: 90%;

    @media(min-width: 700px) {
        padding: 3.2rem 0;
        max-width: 740px;
        margin: 0 auto;
    }
`;

// #search-teachers {
//     
// }

    // #search-teachers 

// #search-teachers 

// #search-teachers button:hover {
//     
// }

// #page-teacher-list main {
    
// }

// @media (min-width: 700px) {

//     #search-teachers {
        
//     }

//     #search-teachers .input-block + .input-block,
//     #search-teachers .select-block + .select-block {
//         margin-top: 0;
//     }

//     #page-teacher-list main {

//     }
// }