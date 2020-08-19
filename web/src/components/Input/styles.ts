import styled from 'styled-components';

export const Container = styled.div `
    position: relative;

    label {
        font-size: 1.4rem;
    }

    input {
        width: 100%;
        margin-top: 5.8rem;
        height: 5.6rem;
        border-radius: 0.8rem;
        background: var(--color-input-background);
        border: 1px solid var(--color-line-in-white);
        outline: 0;
        padding: 0 1.6rem;
        font: 1.6rem Archivo;
    }
`;
