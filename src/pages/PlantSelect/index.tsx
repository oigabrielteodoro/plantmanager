import React from 'react';

import { Header } from '../../components/Header';

import { Container, HeaderContainer, EnvironmentTitle, EnvironmentSubTitle } from './styles';

export function PlantSelect() {
  return (
    <Container>
      <HeaderContainer>
        <Header />

        <EnvironmentTitle>Em qual ambiente</EnvironmentTitle>
        <EnvironmentSubTitle>você quer colocar sua planta?</EnvironmentSubTitle>
      </HeaderContainer>
    </Container>
  );
}