import React from 'react';

import { Container, ButtonText } from './styles';

interface ButtonProps {
  children: string;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <Container>
      <ButtonText>
        {children}
      </ButtonText>
    </Container>
  );
}

export default Button;