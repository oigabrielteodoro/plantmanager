import React from 'react';

import avatarImg from '../../assets/avatar.jpeg';

import { Container, UserInformation, HelloText, UserName, UserAvatar } from './styles';

export function Header() {
  return (
    <Container>
      <UserInformation>
        <HelloText>Olá,</HelloText>
        <UserName>Gabriel</UserName>
      </UserInformation>

      <UserAvatar source={avatarImg} />
    </Container>
  )
}