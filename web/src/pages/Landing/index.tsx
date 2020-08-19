import React, { useEffect, useState } from 'react';

import LogoImg from '../../assets/images/logo.svg';
import LandingImg from '../../assets/images/landing.svg';

import StudyIcon from '../../assets/images/icons/study.svg';
import GiveClassesIcon from '../../assets/images/icons/give-classes.svg';
import PurpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import { Container, Logo, ButtonsContainer, LandingImage, StyledLink, StyledLinkGive, TotalConnections } from './styles';

import api from '../../services/api';

const Landing: React.FC = () => {
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('connections').then(response => {
            const { total } = response.data;

            setTotalConnections(total);
        })
    }, []);

    return (
        <Container>
            <div>
                <Logo>
                    <img src={LogoImg} alt='Proffy' />
                    <h2>Sua plataforma de estudos online.</h2>
                </Logo>

                <LandingImage>
                    <img src={LandingImg} alt="Plataforma de estudos" />
                </LandingImage>
                

                <ButtonsContainer>
                    <StyledLink to="/study">
                        <img src={StudyIcon} alt='Estudar' />
                        Estudar
                    </StyledLink>

                    <StyledLinkGive to="/give-classes">
                        <img src={GiveClassesIcon} alt="Dar Aulas"/>
                        Dar Aulas 
                    </StyledLinkGive>
                </ButtonsContainer> 

                <TotalConnections>
                    Total de {totalConnections} conexões já realizadas <img src={PurpleHeartIcon} alt="Coração roxo"/>
                </TotalConnections>
            </div>
        </Container>
    )
};

export default Landing;