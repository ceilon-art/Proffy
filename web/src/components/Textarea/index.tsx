import React, { TextareaHTMLAttributes } from 'react';

import { Container, TextArea } from './styles';

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>  {
    name: string;
    label: string;
    className?: string;

}

const Textarea: React.FC<TextareaProps> = ({ label, name, className, ...rest }) => {
    return (
        <Container className={className}>
            <label htmlFor={name}>{label}</label>
            <TextArea id={name} {...rest} />
        </Container>
    )
};

export default Textarea;