import React, { useEffect, useState } from 'react';

import { ActivityIndicator } from 'react-native';

import api from '../../services/api';

import { useNavigation } from '@react-navigation/core';

import { Load } from '../../components/Load';
import { Header } from '../../components/Header';
import { PlantCardPrimary } from '../../components/PlantCardPrimary';
import { EnviromentButton } from '../../components/EnviromentButton';

import colors from '../../styles/colors';

import { Container, HeaderContainer, EnvironmentTitle, EnvironmentSubTitle, EnvironmentList, PlantsContainer, PlantsList } from './styles';

export interface Environment {
  key: string;
  title: string;
}

export interface Plant {
  id: number;
  name: string;
  photo: string;
  about: string;
  environments: string[];
  water_tips: string;
} 

export function PlantSelect() {
  const navigation = useNavigation();

  const [loading, setLoading] = useState(true);

  const [plants, setPlants] = useState<Plant[]>([]);
  const [environments, setEnviroments] = useState<Environment[]>([]);

  const [filteredPlants, setFilteredPlants] = useState<Plant[]>([]);
  const [environmentSelected, setEnvironmentSelected] = useState<string>('all');

  const [currentPage, setCurrentPage] = useState(1);
  const [loadingMore, setLoadingMore] = useState(true);

  function handleEnvironmentSelected(environment: string) {
    setEnvironmentSelected(environment);

    if (environment === 'all') {
      return setFilteredPlants(plants);
    }

    const filtered = plants.filter(plan => plan.environments.includes(environment));

    setFilteredPlants(filtered);
  }

  function handlePlantSelect(plant: Plant) {
    navigation.navigate('PlantSave', { plant });
  }

  function loadPlants() {
    api.get<Plant[]>('plants', {
      params: {
        _sort: 'name',
        _order: 'asc',
        _page: currentPage,
        _limit: 8,
      }
    }).then(({ data }) => {
      if (!data) {
        return setLoading(true);
      }

      if (currentPage > 1) {
        setPlants(oldValue => [...oldValue, ...data]);
        setFilteredPlants(oldValue => [...oldValue, ...data]);
      } else {
        setPlants(data);
        setFilteredPlants(data);
      }
    }).finally(() => {
      setLoading(false);
      setLoadingMore(false);
    });
  }

  function handleLoadMore(distance: number) {
    if (distance < 1) return;

    setLoadingMore(true);
    setCurrentPage(oldValue => oldValue + 1);

    loadPlants();
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
    loadPlants();
  }, []);

  if (loading) {
    return <Load />
  }

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
          <EnviromentButton 
            title={item.title} 
            active={item.key === environmentSelected} 
            onPress={() => handleEnvironmentSelected(item.key)} 
          />
        )}
      />

      <PlantsContainer>
        <PlantsList 
          data={filteredPlants} 
          numColumns={2}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <PlantCardPrimary 
              data={item} 
              onPress={() => handlePlantSelect(item)} 
            />
          )} 
          onEndReachedThreshold={0.1}
          onEndReached={({ distanceFromEnd }) => handleLoadMore(distanceFromEnd)}
          ListFooterComponent={
            loadingMore ? <ActivityIndicator color={colors.green} /> : <></>
          }
        />
      </PlantsContainer>
    </Container>
  );
}