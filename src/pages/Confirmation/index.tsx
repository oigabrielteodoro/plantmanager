import React from 'react';

import { useNavigation, useRoute } from '@react-navigation/core';

import { Button } from '../../components/Button';

import { Wrapper, Container, Emoji, Title, SubTitle, Footer } from './styles';

interface Params {
  title: string;
  subtitle: string;
  icon: 'smile' | 'hug';
  nextScreen: string;
  buttonTitle: string;
}

const emojis = {
  hug: '🤗',
  smile: '😄'
}

export function Confirmation() {
  const navigation = useNavigation();

  const route = useRoute();

  const { title, subtitle, icon, buttonTitle, nextScreen } = route.params as Params;

  function handleNavigate() {
    navigation.navigate(nextScreen);
  }

  return (
    <Wrapper>
      <Container>
        <Emoji>{emojis[icon]}</Emoji>

        <Title>{title}</Title>

        <SubTitle>{subtitle}</SubTitle>

        <Footer>
          <Button title={buttonTitle} onPress={handleNavigate} />
        </Footer>
      </Container>

    </Wrapper>
  );
};