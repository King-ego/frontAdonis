import styled from 'styled-components';
import { Field } from 'formik';
// i
interface InputContainerProps {
  color?: string;
}

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.grey10};
  padding: 12px;
`;

export const Content = styled.div`
  width: 300px;
  /* height: 300px; */
  /* border: 1px solid ${(props) => props.theme.colors.blue50};
  border-radius: 6px; */
`;

export const Input = styled(Field)`
  width: 100%;
  border: none;
  height: 38px;
  padding: 0 36px 0 12px;
  background: transparent;
  border-radius: 6px;
`;

export const InputContainer = styled.div<InputContainerProps>`
  margin-bottom: 32px;
  display: flex;
  border: 1px solid ${(props) => props.color};
  background: ${(props) => props.theme.colors.white};
  /* box-shadow: 1px 1px 0px 0px ${(props) => props.theme.colors.blue40}; */
  border-radius: 6px;
  position: relative;
`;

export const Avatar = styled.div`
  position: absolute;
  bottom: 0;
  right: 12px;

  .avatar-color-error {
    fill: ${(props) => props.theme.colors.red};
  }
`;

export const Span = styled.span`
  display: block;
  background: ${(props) => props.theme.colors.red};
  color: ${(props) => props.theme.colors.white};
  position: absolute;
  width: 100px;
  bottom: 30px;
  right: 0;
  padding: 5px;
  border-radius: 6px;
`;

export const Button = styled.button`
  background: ${(props) => props.theme.secondaryColors.blue50};
  border: 1px solid ${(props) => props.theme.secondaryColors.blue50};
  color: ${(props) => props.theme.colors.grey10};
  width: 50%;
  height: 38px;
  padding: 0 11px;
  border-radius: 6px;

  &.hover:hover {
    background: ${(props) => props.theme.secondaryColors.blue40};
    border: 1px solid ${(props) => props.theme.secondaryColors.blue40};
  }
`;

export const Title = styled.p`
  width: 100%;
  text-align: center;
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 32px;
`;
