import React, { InputHTMLAttributes } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>  {
    name: string;
    label: string;
    className?: string;
}

const Input: React.FC<InputProps> = ({ label, name, className, ...rest }) => {
    return (
        <Container className={className}>
            <label htmlFor={name}>{label}</label>
            <input type="text" id={name} {...rest} />
        </Container>
    )
};

export default Input;