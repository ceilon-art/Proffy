import styled from 'styled-components';

export const Container = styled.div `
    position: relative;
    margin-top: 4rem;

    label {
        font-size: 1.4rem;
    }

    &.teacherForm {
        display: flex;
        flex-direction: column;
        margin-top: 5rem;
        margin-left: -1rem;
    }
`;

export const TextArea = styled.textarea `
    width: 100%;
    height: 16rem;
    min-height: 8rem;
    margin-top: 0.8rem;
    border-radius: 0.8rem;
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    resize: vertical;
    padding: 1.2rem 1.6rem;
    font: 1.6rem Archivo;
`;

