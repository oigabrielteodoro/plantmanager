import React from 'react';

import { RectButtonProps } from 'react-native-gesture-handler';

import { PlantProps } from '../../libs/storage';

import { Container, PlantName, PlantPhoto } from './styles';

interface PlanProps extends RectButtonProps {
  data: PlantProps;
}

export function PlantCardPrimary({ data: { name, photo }, ...rest }: PlanProps) {
  return (
    <Container {...rest}> 
      <PlantPhoto uri={photo} width={70} height={70} />

      <PlantName>{name}</PlantName>
    </Container>
  )
}