import styled from 'styled-components/native';

import { Feather } from '@expo/vector-icons';

import fonts from '../../styles/fonts';
import colors from '../../styles/colors';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: space-around;
  padding: 0 20px;
`;

export const Title = styled.Text`
  font-size: 32px;
  font-weight: bold;
  text-align: center;

  color: ${colors.heading};
  font-family: ${fonts.heading};

  margin-top: 38px;
  line-height: 36px;
`;

export const SubTitle = styled.Text`
  text-align: center;
  font-size: 18px;
  padding: 0 20px;
  color: ${colors.heading};
  font-family: ${fonts.text};
`;

export const Button = styled.TouchableOpacity`
  background: ${colors.green};
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-bottom: 10px;

  height: 56px;
  width: 56px;
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
  font-size: 24px;
`;

export const ButtonIcon = styled(Feather)`
  font-size: 32px;
  color: ${colors.white};
`;

export const Image = styled.Image``;
