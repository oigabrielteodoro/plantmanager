import React, { useEffect, useState } from 'react';
import { EnviromentButton } from '../../components/EnviromentButton';

import { Header } from '../../components/Header';
import { PlantCardPrimary } from '../../components/PlantCardPrimary';
import api from '../../services/api';

import { Container, HeaderContainer, EnvironmentTitle, EnvironmentSubTitle, EnvironmentList, PlantsContainer, PlantsList } from './styles';

export interface Environment {
  key: string;
  title: string;
}

export interface Plant {
  id: number;
  name: string;
  photo: string;
  environments: string[];
} 

export function PlantSelect() {
  const [plants, setPlants] = useState<Plant[]>([]);
  const [environments, setEnviroments] = useState<Environment[]>([]);

  const [filteredPlants, setFilteredPlants] = useState<Plant[]>([]);
  const [environmentSelected, setEnvironmentSelected] = useState<string>('all');

  function handleEnvironmentSelected(environment: string) {
    setEnvironmentSelected(environment);

    if (environment === 'all') {
      return setFilteredPlants(plants);
    }

    const filtered = plants.filter(plan => plan.environments.includes(environment));

    setFilteredPlants(filtered);
  }
 
  useEffect(() => {
    api.get<Environment[]>('plants_environments', {
      params: {
        _sort: 'title',
        _order: 'asc'
      }
    }).then(({ data }) => {
      setEnviroments([
        { key: 'all', title: 'Todos' },
        ...data,
      ]);
    });
  }, []);

  useEffect(() => {
    api.get<Plant[]>('plants', {
      params: {
        _sort: 'name',
        _order: 'asc'
      }
    }).then(({ data }) => {
      setPlants(data);

      setFilteredPlants(data);
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
          <EnviromentButton title={item.title} active={item.key === environmentSelected} onPress={() => handleEnvironmentSelected(item.key)} />
        )}
      />

      <PlantsContainer>
        <PlantsList 
          data={filteredPlants} 
          numColumns={2}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <PlantCardPrimary data={item} />
          )} 
        />
      </PlantsContainer>
    </Container>
  );
}