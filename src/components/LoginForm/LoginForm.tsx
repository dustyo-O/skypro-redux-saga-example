import { FC, useCallback, useState } from 'react';
import { cn } from '@bem-react/classname';
import { useDispatch } from 'react-redux';
import { userLogin } from '../../store/actions';

const cnLoginForm = cn('LoginForm');

const EMPTY_LOGIN_FORM = { login: '' };

export const LoginForm: FC = () => {
  const [form, setForm] = useState(EMPTY_LOGIN_FORM);

  const dispatch = useDispatch();

  const inputChangeHandle = useCallback((e) => {
    const { target } = e;

    setForm(prev => ({
      ...prev,
      [target.name]: target.type === 'checkbox' ? target.checked : target.value,
    }));
  }, []);

  const formSubmitHandle = useCallback((e) => {
    e.preventDefault();

    dispatch(userLogin(form.login));

    setForm(EMPTY_LOGIN_FORM);
  }, [dispatch, form.login]);

  return (
    <form className={cnLoginForm()} onSubmit={formSubmitHandle}>
      <input
        className={cnLoginForm('LoginInput')}
        value={form.login}
        name="login"
        onChange={inputChangeHandle}
      />
      <button className={cnLoginForm('LoginButton')}>Войти</button>
    </form>
  );
};
