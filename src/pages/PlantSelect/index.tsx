import React, { useEffect, useState } from 'react';
import { EnviromentButton } from '../../components/EnviromentButton';

import { Header } from '../../components/Header';
import api from '../../services/api';

import { Container, HeaderContainer, EnvironmentTitle, EnvironmentSubTitle, EnvironmentList } from './styles';

export interface Environment {
  key: string;
  title: string;
}

export function PlantSelect() {
  const [environments, setEnviroments] = useState<Environment[]>([]);

  const [selectedEnvironment, setSelectedEnvironment] = useState<string>('living_room');

  useEffect(() => {
    api.get<Environment[]>('plants_environments').then(response => {
      setEnviroments(response.data);
    });
  }, []);

  return (
    <Container>
      <HeaderContainer>
        <Header />

        <EnvironmentTitle>Em qual ambiente</EnvironmentTitle>
        <EnvironmentSubTitle>você quer colocar sua planta?</EnvironmentSubTitle>
      </HeaderContainer>

      <EnvironmentList
        data={environments}
        keyExtractor={item => item.key}
        renderItem={({ item }) => (
          <EnviromentButton title={item.title} active={item.key === selectedEnvironment} onPress={() => setSelectedEnvironment(item.key)} />
        )}
      />
    </Container>
  );
}