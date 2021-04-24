import styled from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

import { SvgFromUri } from 'react-native-svg';

import fonts from '../../styles/fonts';
import colors from '../../styles/colors';

export const Container = styled(RectButton)`
  width: 100%;
  padding: 25px 10px;
  border-radius: 20px;
  flex-direction: row;
  align-items: center;
  background: ${colors.shape};
  margin: 5px 0;
`;

export const PlantName = styled.Text`
  flex: 1;
  margin-left: 10px;
  font-family: ${fonts.heading};
  color: ${colors.heading};
  font-size: 17px;
`;

export const PlantPhoto = styled(SvgFromUri)``;

export const PlantDetails = styled.View`
  align-items: flex-end;
`;

export const TimeLabel = styled.Text`
  font-size: 16px;
  font-family: ${fonts.text};
  color: ${colors.body_light};
`;

export const TimeText = styled.Text`
  margin-top: 5px;
  font-size: 16px;
  font-family: ${fonts.heading};
  color: ${colors.body_dark};
`;