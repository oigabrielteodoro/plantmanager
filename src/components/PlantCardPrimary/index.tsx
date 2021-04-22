import React from 'react';

import { RectButtonProps } from 'react-native-gesture-handler';

import { Plant } from '../../pages/PlantSelect';

import { Container, PlantName, PlantPhoto } from './styles';

interface PlanProps extends RectButtonProps {
  data: Plant;
}

export function PlantCardPrimary({ data: { name, photo }, ...rest }: PlanProps) {
  return (
    <Container {...rest}> 
      <PlantPhoto uri={photo} width={70} height={70} />

      <PlantName>{name}</PlantName>
    </Container>
  )
}