import styled from 'styled-components/native';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${getStatusBarHeight() + 20}px;
`; 

export const UserInformation = styled.View``;

export const HelloText = styled.Text`
  font-size: 32px;
  color: ${colors.heading};
  font-family: ${fonts.text};
`;

export const UserName = styled.Text`
  font-size: 32px;
  color: ${colors.heading};
  font-family: ${fonts.heading};
  line-height: 40px;
`;

export const UserAvatar = styled.Image`
  width: 70px;
  height: 70px;
  border-radius: 40px;
`;