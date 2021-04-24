import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';

import avatarImg from '../../assets/avatar.jpeg';

import { Container, UserInformation, HelloText, UserName, UserAvatar } from './styles';

export function Header() {
  const [username, setUsername] = useState<string>();

  useEffect(() => {
    async function loadUsername() {
      const user = await AsyncStorage.getItem('@plantmanager:user');

      setUsername(user || '');
    }

    loadUsername();
  }, []);

  return (
    <Container>
      <UserInformation>
        <HelloText>Olá,</HelloText>
        <UserName>{username}</UserName>
      </UserInformation>

      <UserAvatar source={avatarImg} />
    </Container>
  )
}