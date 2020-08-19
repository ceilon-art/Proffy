import styled from 'styled-components';

export const Container = styled.div `
    position: relative;

    label {
        font-size: 1.4rem;
    }

    select {
        width: 80%;
        height: 5.6rem;
        margin-top: 5.8rem;
        border-radius: 0.8rem;
        background: var(--color-input-background);
        border: 1px solid var(--color-line-in-white);
        outline: 0;
        padding: 0 1.6rem;
        font: 1.2rem Archivo;
    }
`;
