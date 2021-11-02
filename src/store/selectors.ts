import { RootState } from "./store";

export const selectPage = (state: RootState) => state.page;

export const selectUserLogin = (state: RootState) => state.user?.login;
export const selectUserToken = (state: RootState) => state.user?.token;

export const selectPlayerList = (state: RootState) => state.playerList;

export const selectError = (state: RootState) => state.error;
