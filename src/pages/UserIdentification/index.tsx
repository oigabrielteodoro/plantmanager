import React, { useState } from 'react';
import { Platform } from 'react-native';

import Button from '../../components/Button';

import { Wrapper, KeyboardAvoiding, Container, Form, Header, Title, Emoji, Input, Footer } from './styles';

const UserIdentification = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const [name, setName] = useState<string>();

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

  return (
    <Wrapper>
      <KeyboardAvoiding behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
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
            />

            <Footer>
              <Button>Confirmar</Button>
            </Footer>
          </Form>
        </Container>
      </KeyboardAvoiding>
    </Wrapper>
  );
}

export default UserIdentification;