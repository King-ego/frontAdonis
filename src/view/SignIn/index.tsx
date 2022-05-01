import React, { useState } from 'react';
import {
  Container,
  Content,
  Input,
  Button,
  Title,
  InputContainer,
  Avatar,
  Span,
} from './style';

import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import Icon from '../../components/Icon';

interface SignInputProps {
  user: string;
  password: string;
}

const SignIn: React.FC = () => {
  const [tooltip, setTooltip] = useState<[boolean, number]>([false, 0]);

  const validated = Yup.object().shape({
    user: Yup.string().trim().required('Field Required'),
    password: Yup.string().trim().required('Field Required'),
  });
  const onSubmit = (value: SignInputProps) => {
    console.log({ password: value.password });
    console.log({ user: value.user });
  };
  return (
    <Container>
      <Content>
        <Formik
          validationSchema={validated}
          onSubmit={(values) => onSubmit(values)}
          initialValues={{ user: '', password: '' }}
        >
          {({ errors }) => (
            <Form>
              <Title>Tournament</Title>

              <InputContainer color={errors.user ? '#ff1818' : '#2179ee'}>
                <Input type="text" name="user" placeholder="email or user" />
                <Avatar
                  onClick={() => setTooltip([!tooltip, 1])}
                  onMouseOver={() => setTooltip([true, 1])}
                  onMouseOut={() => setTooltip([false, 1])}
                >
                  {errors.user && tooltip[0] && tooltip[1] === 1 && (
                    <Span>{errors.user}</Span>
                  )}

                  <Icon
                    className={errors.user && 'avatar-color-error'}
                    width="19"
                    height="25"
                    name="avatar-login"
                    fill="#2179EE"
                  />
                </Avatar>
              </InputContainer>

              <InputContainer color={errors.password ? '#ff1818' : '#2179ee'}>
                <Input type="password" name="password" placeholder="password" />
                <Avatar
                  onClick={() => setTooltip([!tooltip, 2])}
                  onMouseOver={() => setTooltip([true, 2])}
                  onMouseOut={() => setTooltip([false, 2])}
                >
                  {errors.password && tooltip[0] && tooltip[1] === 2 && (
                    <Span>{errors.password}</Span>
                  )}
                  <Icon
                    className={errors.password && 'avatar-color-error'}
                    width="19"
                    height="25"
                    name={
                      errors.password ? 'lock-login-red' : 'lock-login-blue'
                    }
                    // fill="#2179EE"
                    // stroke="#2179EE"
                  />
                </Avatar>
              </InputContainer>

              <Button className="hover" type="submit">
                Login
              </Button>
            </Form>
          )}
        </Formik>
      </Content>
    </Container>
  );
};

export default SignIn;
