import { PlayerResponse } from "../api/api";
import { PlayerListType } from "../components/PlayerList/PlayerList";

export const USER_LOGIN_ACTION = 'USER@LOGIN' as const;
export const USER_LOGIN_SUCCESS_ACTION = 'USER@LOGIN_SUCCESS' as const;
export const USER_LOGIN_ERROR_ACTION = 'USER@LOGIN_ERROR' as const;
export const PLAYER_LIST_INIT_ACTION = 'PLAYER_LIST@INIT' as const;
export const PLAYER_LIST_SUCCESS_ACTION = 'PLAYER_LIST@SUCCESS' as const;

export function userLogin(login: string) {
  return {
    type: USER_LOGIN_ACTION,
    payload: login,
  };
}

export function userLoginSuccess(user: { login: string, token: string }) {
  return {
    type: USER_LOGIN_SUCCESS_ACTION,
    payload: user
  };
}

export function userLoginError(message: string) {
  return {
    type: USER_LOGIN_ERROR_ACTION,
    payload: message
  };
}

export function playerListInit() {
  return {
    type: PLAYER_LIST_INIT_ACTION,
  };
}

export function playerListSuccess(users: PlayerListType) {
  return {
    type: PLAYER_LIST_SUCCESS_ACTION,
    payload: users
  };
}

export type UserLoginActionType = ReturnType<typeof userLogin>;
export type UserLoginSuccessActionType = ReturnType<typeof userLoginSuccess>;
export type UserLoginErrorActionType = ReturnType<typeof userLoginError>;
export type PlayerListInitActionType = ReturnType<typeof playerListInit>;
export type PlayerListSuccessActionType = ReturnType<typeof playerListSuccess>;

export type RootAction =
  | UserLoginActionType
  | UserLoginSuccessActionType
  | UserLoginErrorActionType
  | PlayerListInitActionType
  | PlayerListSuccessActionType
  ;
