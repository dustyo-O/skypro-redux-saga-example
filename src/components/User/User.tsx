import { FC } from 'react';
import { cn } from '@bem-react/classname';
import { useSelector } from 'react-redux';
import { selectUserLogin } from '../../store/selectors';

const cnUser = cn('User');

export const User: FC = () => {
  const login = useSelector(selectUserLogin);

  return (
    <div className={cnUser()}>
      {login}
    </div>
  );
};
