import React from 'react';

import { TouchableOpacityProps } from 'react-native';

import { Container, ButtonText } from './styles';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

const Button = ({ title, ...rest }: ButtonProps) => {
  return (
    <Container {...rest}>
      <ButtonText>
        {title}
      </ButtonText>
    </Container>
  );
}

export default Button;