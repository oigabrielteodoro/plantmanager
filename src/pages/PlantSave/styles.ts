import styled from 'styled-components/native';

import { getBottomSpace } from 'react-native-iphone-x-helper';

import { SvgFromUri } from 'react-native-svg';

import fonts from '../../styles/fonts';
import colors from '../../styles/colors';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  background: ${colors.shape};
`;

export const PlantInfo = styled.View`
  flex: 1;
  padding: 50px 30px;
  align-items: center;
  justify-content: center;
  background: ${colors.shape};
`;

export const PlantImage = styled(SvgFromUri).attrs({
  width: 150,
  height: 150,
})``;

export const PlantName = styled.Text`
  font-family: ${fonts.heading};
  font-size: 24px;
  color: ${colors.heading};
  margin-top: 15px;
`;

export const PlantAbout = styled.Text`
  text-align: center;
  font-family: ${fonts.text};
  color: ${colors.heading};
  font-size: 17px;
  margin-top: 10px;
`;

export const Controller = styled.View`
  background: ${colors.white};
  padding: 20px 20px ${getBottomSpace() || 20}px;
`;

export const TipContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${colors.blue_light};
  border-radius: 20px;
  padding: 20px;
  position: relative;
  bottom: 60px;
`;

export const TipImage = styled.Image`
  width: 56px;
  height: 56px;
`;

export const TipText = styled.Text`
  flex: 1;
  margin-left: 20px;
  font-family: ${fonts.text};
  color: ${colors.blue};
`;

export const AlertLabel = styled.Text`
  text-align: center;
  font-family: ${fonts.complement};
  color: ${colors.heading};
  font-size: 12px;
  margin-bottom: 5px;
`;

export const DateTimerPickerButton = styled.TouchableOpacity`
  width: 100%;
  align-items: center;
  padding: 40px 0;
`;

export const DateTimerPickerText = styled.Text`
  color: ${colors.heading};
  font-size: 24px;
  font-family: ${fonts.text};
`;