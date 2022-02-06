import styled from 'styled-components/native';

export const Component = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  padding-left: 16px;
  padding-right: 16px;
`;

export const ButtonContainer = styled.View`
  width: 100%;
  position: absolute;
  top: 0;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const Button = styled.TouchableOpacity`
  padding: 16px;
`;
