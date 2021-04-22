import styled, { css } from 'styled-components/native';

import { RectButton } from 'react-native-gesture-handler';

import fonts from '../../styles/fonts';
import colors from '../../styles/colors';

interface ContainerProps {
  active: boolean;
}

type ButtonTextProps = ContainerProps;

export const Container = styled(RectButton)<ContainerProps>`
  background: ${colors.shape};
  height: 40px;
  width: 76px;

  justify-content: center;
  align-items: center;

  border-radius: 12px;

  ${({ active }) => active && css`
    background: ${colors.green_light};
  `}
`;

export const ButtonText = styled.Text<ButtonTextProps>`
  color: ${colors.heading};
  font-family: ${fonts.text};

  ${({ active }) => active && css`
    font-family: ${fonts.heading};
    color: ${colors.green_dark};
  `}
`;