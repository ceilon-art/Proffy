import styled from 'styled-components';

export const Container = styled.div `
    margin-top: 11.8rem;
    margin-left: -1rem;
    
    label {
        font-size: 1.3rem;
    }

    input {
        width: 90%;
        height: 5.6rem;
        border-radius: 0.8rem;
        background: var(--color-input-background);
        border: 1px solid var(--color-line-in-white);
        outline: 0;
        padding: 0 1.6rem;
        font: 1.6rem Archivo;
        margin-top: 1.2rem;
    }

    &.teacherForm {
        display: flex;
        flex-direction: column;
        margin-top: 5rem;
    }

    &.teacherList {
        display: flex;
        flex-direction: column;
        margin-top: 15.2rem;
    }
`;
