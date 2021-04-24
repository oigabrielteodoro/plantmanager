import React, { useEffect, useState } from 'react';

import { Text } from 'react-native';

import { formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import { Container, Plants, PlantsList, PlantsTitle, Spotlight, SpotlightImage, SpotlightText } from './styles';

import { Header } from '../../components/Header';

import { loadPlant, PlantProps } from '../../libs/storage';

import waterdrop from '../../assets/waterdrop.png';
import { PlantCardSecondary } from '../../components/PlantCardSecondary';

interface PlantCardProps extends PlantProps {
  hour: string;
};

export function MyPlants() {
  const [myPlants, setMyPlants] = useState<PlantProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [nextWatered, setNextWatered] = useState<string>();

  useEffect(() => {
    async function loadStorageData() {
      const plantsStoraged = await loadPlant();

      const nextTime = formatDistance(new Date(plantsStoraged[0].dateTimeNotification).getTime(), new Date().getTime(), { locale: pt });

      setNextWatered(`Não esqueça de regar a ${plantsStoraged[0].name} às ${nextTime} horas.`);

      setMyPlants(plantsStoraged);
      setLoading(false);
    }

    loadStorageData();
  }, []);

  return (
    <Container>
      <Header />

      <Spotlight>
        <SpotlightImage source={waterdrop} />
        <SpotlightText>{nextWatered}</SpotlightText>
      </Spotlight>

      <Plants>
        <PlantsTitle>Próximas regadas</PlantsTitle>

        <PlantsList 
          data={myPlants}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <PlantCardSecondary data={item as PlantCardProps} />
          )}
        />
      </Plants>
    </Container>
  )
}