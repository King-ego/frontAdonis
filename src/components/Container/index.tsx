import React from 'react';
import { Content } from './style';

export interface PropsContainer {
  // use in the components <Container/> and <BackgroundColor/>
  background?: string;
}

const Container: React.FC<PropsContainer> = ({ children, background }) => {
  return <Content background={background}>{children}</Content>;
};

export default Container;
