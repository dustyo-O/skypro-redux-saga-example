import { FC } from 'react';
import { cn } from '@bem-react/classname';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { selectError } from '../../store/selectors';

const cnErrorToast = cn('ErrorToast');

export const ErrorToast: FC = () => {
  const error = useSelector(selectError);

  if (!error) return null;

  toast(error.message);

  return (
    <div className={cnErrorToast()}>
      <ToastContainer />
    </div>
  );
};
