import styled from 'styled-components';

import { PropsContainer } from './';

export const Content = styled.div<PropsContainer>`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 5%;
  background: ${({ background }) => (background ? background : 'transparent')};
`;
