import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga'
import { PlayerListType } from '../components/PlayerList/PlayerList';
import { reducer } from './reducer';
import { rootSaga } from './sagas'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(sagaMiddleware)
  ),
);

// Then run the saga
sagaMiddleware.run(rootSaga)

export type RootState = {
  page: string,
  user?: {
    login: string;
    token: string;
  },
  error?: {
    message: string;
  },
  playerList?: PlayerListType
};
