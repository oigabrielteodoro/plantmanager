import styled from 'styled-components/native';

import fonts from '../../styles/fonts';
import colors from '../../styles/colors';
import { FlatList } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background: ${colors.background};
`;

export const HeaderContainer = styled.View`
  padding: 0 30px;
`;

export const EnvironmentTitle = styled.Text`
  font-size: 17px;
  color: ${colors.heading};
  font-family: ${fonts.heading};
  line-height: 20px;
  margin-top: 15px;
`;

export const EnvironmentSubTitle = styled.Text`
  font-size: 17px;
  font-family: ${fonts.text};
  line-height: 20px;
  color: ${colors.heading};
`;

export const EnvironmentList = styled(FlatList as new () => FlatList).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    marginLeft: 32,
    marginVertical: 32
  }
})``