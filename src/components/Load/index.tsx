import React from 'react';

import LottieView from 'lottie-react-native';

import loadAnimation from '../../assets/load.json';

import { Container, Animation } from './styles';

export function Load() {
  return (
    <Container>
      <Animation source={loadAnimation} autoPlay loop />
    </Container>
  )
}