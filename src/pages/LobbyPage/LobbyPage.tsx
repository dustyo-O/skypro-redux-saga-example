import React, { FC } from 'react';
import { cn } from '@bem-react/classname';
import { PlayerList } from '../../components/PlayerList/PlayerList';
import { PlayButton } from '../../components/PlayButton/PlayButton';
import { User } from '../../components/User/User';

const cnLobbyPage = cn('LobbyPage');

export const LobbyPage: FC = () => {
  return (
    <div className={cnLobbyPage()}>
      Привет, <User/>
      <PlayerList />
      <PlayButton />
    </div>
  );
};
