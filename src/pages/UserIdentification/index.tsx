import React, { useState } from 'react';
import { Platform, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';

import { useNavigation } from '@react-navigation/core';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { Button } from '../../components/Button';

import { Wrapper, KeyboardAvoiding, Container, Form, Header, Title, Emoji, Input, Footer } from './styles';

export function UserIdentification() {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const [name, setName] = useState<string>();

  const navigation = useNavigation();

  async function handleSubmit() {
    if (!name) {
      return Alert.alert('Me diz como chamar você. 😢');
    }

    try {
      await AsyncStorage.setItem('@plantmanager:user', name);
      navigation.navigate('Confirmation', {
        title: 'Prontinho',
        subtitle: 'Agora vamos começar a cuidar das suas plantinhas com muito cuidado.',
        icon: 'smile',
        nextScreen: 'PlantSelect',
        buttonTitle: 'Começar',
      });
    } catch {
      Alert.alert('Não foi possível salvar o seu nome. 😢');
    }
  }

  function handleInputBlur() {
    setIsFocused(false);
    setIsFilled(!!name);
  }

  function handleInputFocus() {
    setIsFocused(true);
  }

  function handleInputChange(value: string) {
    setIsFilled(!!value);

    setName(value);
  }

  function handleDismissKeyboard() {
    Keyboard.dismiss();
  }

  return (
    <Wrapper>
      <KeyboardAvoiding behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <TouchableWithoutFeedback onPress={handleDismissKeyboard}>
          <Container>
            <Form>
              <Header>
                <Emoji>{isFilled ? '😄' : '😀'}</Emoji>

                <Title>Como podemos {`\n`}chamar você?</Title>
              </Header>

              <Input 
                placeholder="Digite um nome" 
                onBlur={handleInputBlur} 
                onFocus={handleInputFocus} 
                onChangeText={handleInputChange}
                isFocused={isFocused || isFilled} 
                autoCorrect={false}
                autoCapitalize="words"
                onSubmitEditing={handleSubmit}
              />

              <Footer>
                <Button title="Confirmar" onPress={handleSubmit} />
              </Footer>
            </Form>
          </Container>
        </TouchableWithoutFeedback>
      </KeyboardAvoiding>
    </Wrapper>
  );
};