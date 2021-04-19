import React from 'react';

import wateringImg from '../../assets/watering.png';

import { Container, Title, SubTitle, Button, ButtonText, Image } from './styles';

const Welcome = () => {
  return (
    <Container>
      <Title>Gerencie {`\n`} suas plans  {`\n`}de forma fácil</Title>
      <Image source={wateringImg} />

       <SubTitle>
        Não esqueça mais de regar suas plantas.
        Nós cuidamos de lembrar você sempre que precisar. 
       </SubTitle>

       <Button activeOpacity={0.7}>
         <ButtonText>
          >
         </ButtonText>
       </Button>
    </Container>
  );
}

export default Welcome;