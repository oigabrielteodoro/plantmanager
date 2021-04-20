import styled from 'styled-components/native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: space-around;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 30px;
`;

export const Emoji = styled.Text`
  font-size: 78px;
`;

export const Title = styled.Text`
  font-size: 22px;
  font-family: ${fonts.heading};
  text-align: center;
  color: ${colors.heading};
  line-height: 38px;
  margin-top: 15px;
`;

export const SubTitle = styled.Text`
  font-family: ${fonts.text};
  text-align: center;
  font-size: 17px;
  padding: 10px 0;
  color: ${colors.heading};
`;

export const Footer = styled.View`
  width: 100%;
  padding: 0 50px;
  margin-top: 20px;
`;
