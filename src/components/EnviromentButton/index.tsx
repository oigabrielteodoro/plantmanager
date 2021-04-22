import React from 'react';

import { RectButtonProps } from 'react-native-gesture-handler';

import { ButtonText, Container } from './styles';

interface EnviromentButtonProps extends RectButtonProps {
  title: string;
  active?: boolean;
}

export function EnviromentButton({ title, active = false, ...rest }: EnviromentButtonProps) {
  return (
    <Container active={active} {...rest}>
      <ButtonText active={active}>{title}</ButtonText>
    </Container>
  )
}