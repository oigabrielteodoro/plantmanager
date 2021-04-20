import styled from 'styled-components/native';

import fonts from '../../styles/fonts';
import colors from '../../styles/colors';

export const Container = styled.TouchableOpacity`
  background: ${colors.green};
  height: 56px;
  border-radius: 16px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-size: 16px;
  color: ${colors.white};
  font-family: ${fonts.heading};
`;
