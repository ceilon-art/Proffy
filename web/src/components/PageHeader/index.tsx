import React from 'react';
import { Link } from 'react-router-dom';

import LogoImg from '../../assets/images/logo.svg';
import BackIcon from '../../assets/images/icons/back.svg';

import { Container, TopBar, Content } from './styles';

interface PageHeaderProps {
    title: string;
    description?: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return(
        <Container>
            <TopBar>
                <img src={LogoImg} alt="Proffy"/>
                <Link to="/">
                    <img src={BackIcon} alt="Voltar"/>
                </Link>
            </TopBar>

            <Content>
                <strong>{props.title}</strong>
                { props.description && <p>{props.description}</p> }
                
                {props.children}
            </Content>           
        </Container>
    )
};

export default PageHeader;