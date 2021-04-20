import React from 'react';

import wateringImg from '../../assets/watering.png';

import { Wrapper, Container, Title, SubTitle, Button, ButtonText, ButtonIcon, Image } from './styles';

const Welcome = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Gerencie {`\n`} suas plans de {`\n`}forma fácil</Title>
        <Image source={wateringImg} resizeMode="contain" />

        <SubTitle>
          Não esqueça mais de regar suas plantas.
          Nós cuidamos de lembrar você sempre que precisar. 
        </SubTitle>

        <Button activeOpacity={0.7}>
          <ButtonText>
            <ButtonIcon 
              name="chevron-right" 
            />
          </ButtonText>
        </Button>
      </Container>
    </Wrapper>
  );
}

export default Welcome;