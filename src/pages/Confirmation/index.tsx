import React from 'react';

import Button from '../../components/Button';

import { Wrapper, Container, Emoji, Title, SubTitle, Footer } from './styles';

const Confirmation = () => {
  return (
    <Wrapper>
      <Container>
        <Emoji>😄</Emoji>

        <Title>Prontinho</Title>

        <SubTitle>Agora vamos começar a cuidar das suas plantinhas com muito cuidado.</SubTitle>

        <Footer>
          <Button>Continuar</Button>
        </Footer>
      </Container>

    </Wrapper>
  );
}

export default Confirmation;