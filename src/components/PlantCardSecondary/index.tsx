import { Feather } from '@expo/vector-icons';
import React from 'react';
import { Animated, View } from 'react-native';

import { RectButtonProps } from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import colors from '../../styles/colors';

import { Container, PlantName, PlantPhoto, PlantDetails, TimeLabel, TimeText, ButtonRemove } from './styles';

interface PlanProps extends RectButtonProps {
  data: {
    name: string;
    photo: string;
    hour: string;
  };
  onRemove: () => void;
}

export function PlantCardSecondary({ data: { name, photo, hour }, onRemove, ...rest }: PlanProps) {
  return (
    <Swipeable
      overshootRight={false}
      renderRightActions={() => (
        <Animated.View>
          <View>
            <ButtonRemove onPress={onRemove}>
              <Feather name="trash" size={32} color={colors.white} />
            </ButtonRemove>
          </View>
        </Animated.View>
      )}
    >
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
    </Swipeable>
  )
}