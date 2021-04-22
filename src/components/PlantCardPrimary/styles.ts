import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

import { SvgFromUri } from 'react-native-svg';

import fonts from '../../styles/fonts';
import colors from '../../styles/colors';

export const Container = styled(RectButton)`
  flex: 1;
  max-width: 45%;
  background: ${colors.shape};
  border-radius: 20px;
  padding: 10px;
  align-items: center;
  margin: 10px;
`;

export const PlantName = styled.Text`
  color: ${colors.green_dark};
  font-family: ${fonts.heading};
  margin: 16px 0;
`;

export const PlantPhoto = styled(SvgFromUri)``;