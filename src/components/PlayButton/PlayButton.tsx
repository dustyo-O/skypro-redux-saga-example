import { FC } from 'react';
import { cn } from '@bem-react/classname';

const cnPlayButton = cn('PlayButton');

export const PlayButton: FC = () => {
  return (
    <div className={cnPlayButton()}>
      PlayButton
    </div>
  );
};
