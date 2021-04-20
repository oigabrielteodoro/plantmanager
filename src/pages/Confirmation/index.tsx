import React from 'react';

import { useNavigation } from '@react-navigation/core';

import Button from '../../components/Button';

import { Wrapper, Container, Emoji, Title, SubTitle, Footer } from './styles';

const Confirmation = () => {
  const navigation = useNavigation();

  function handleNavigate() {
    navigation.navigate('Home');
  }

  return (
    <Wrapper>
      <Container>
        <Emoji>😄</Emoji>

        <Title>Prontinho</Title>

        <SubTitle>Agora vamos começar a cuidar das suas plantinhas com muito cuidado.</SubTitle>

        <Footer>
          <Button title="Começar" onPress={handleNavigate} />
        </Footer>
      </Container>

    </Wrapper>
  );
}

export default Confirmation;