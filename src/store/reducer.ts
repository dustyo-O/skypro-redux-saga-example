import { PLAYER_LIST_SUCCESS_ACTION, RootAction, USER_LOGIN_ERROR_ACTION, USER_LOGIN_SUCCESS_ACTION } from "./actions";

const DEFAULT_STATE = {
  page: 'login'
}

export function reducer(state = DEFAULT_STATE, action: RootAction) {
  switch (action.type) {
    case USER_LOGIN_SUCCESS_ACTION:
      return {
        ...state,
        page: 'lobby',
        user: {
          ...action.payload
        }
      }
    case USER_LOGIN_ERROR_ACTION:
      return {
        ...state,
        error: {
          message: action.payload
        }
      }
    case PLAYER_LIST_SUCCESS_ACTION:
      return {
        ...state,
        playerList: action.payload
      };
    default:
      return state;
  }
}
