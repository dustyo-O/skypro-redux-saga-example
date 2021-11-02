import React, { FC } from 'react';
import { cn } from '@bem-react/classname';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { ErrorToast } from '../../components/ErrorToast/ErrorToast';

const cnLoginPage = cn('LoginPage');

export const LoginPage: FC = () => {
  return (
    <div className={cnLoginPage()}>
      <ErrorToast />
      <LoginForm />
    </div>
  );
};
