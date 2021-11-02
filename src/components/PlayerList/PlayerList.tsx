import { FC, useEffect } from 'react';
import { cn } from '@bem-react/classname';
import { useDispatch, useSelector } from 'react-redux';
import { playerListInit } from '../../store/actions';
import { PlayerResponse } from '../../api/api';
import { selectPlayerList } from '../../store/selectors';

const cnPlayerList = cn('PlayerList');

export type PlayerListType = { login: PlayerResponse['login'] }[];

export const PlayerList: FC = () => {
  const dispatch = useDispatch();

  const playerList = useSelector(selectPlayerList);

  useEffect(() => {
    // Update the document title using the browser API
    console.log('effect');

    dispatch(playerListInit());
  }, []);

  setTimeout(() => {
    console.log('timer');
    dispatch(playerListInit());
  }, 1000);

  return (
    <div className={cnPlayerList()}>
      {playerList?.map(player => <div key={player.login}>{player.login}</div>)}
    </div>
  );
};
