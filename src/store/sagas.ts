import { call, put, select, takeLatest } from 'redux-saga/effects'
import { playerListSuccess, PLAYER_LIST_INIT_ACTION, UserLoginActionType, userLoginError, userLoginSuccess, USER_LOGIN_ACTION } from './actions';
import { api, LoginResponse, PlayerListResponse } from '../api/api';
import { selectUserToken } from './selectors';

function* userLoginSaga(action: UserLoginActionType) {
  try {
    const user: LoginResponse = yield call(api.login, action.payload);

    yield put(userLoginSuccess({
      login: action.payload,
      token: user.token || '',
    }));
  } catch (e) {
    if (e instanceof Error) {
      yield put(userLoginError(e.message));
    }
  }
}

function* playerListSaga() {
  try {
    const token: string = yield select(selectUserToken);
    const users: PlayerListResponse = yield call(api.playerList, token);

    yield put(playerListSuccess(users.list));
  } catch (e) {
    // if (e instanceof Error) {
    //   yield put(userLoginError(e.message));
    // }
  }
}

export function* rootSaga() {
  yield takeLatest(USER_LOGIN_ACTION, userLoginSaga);
  yield takeLatest(PLAYER_LIST_INIT_ACTION, playerListSaga);
}
