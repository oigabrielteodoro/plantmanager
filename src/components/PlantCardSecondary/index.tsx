import React from 'react';

import { RectButtonProps } from 'react-native-gesture-handler';

import { PlantProps } from '../../libs/storage';

import { Container, PlantName, PlantPhoto, PlantDetails, TimeLabel, TimeText } from './styles';

interface PlanProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
    hour: string;
  };
}

export function PlantCardSecondary({ data: { name, photo, hour }, ...rest }: PlanProps) {
  return (
    <Container {...rest}> 
      <PlantPhoto uri={photo} width={50} height={50} />

      <PlantName>{name}</PlantName>

      <PlantDetails>
        <TimeLabel>
          Regar às
        </TimeLabel>
        <TimeText>{hour}</TimeText>
      </PlantDetails>
    </Container>
  )
}