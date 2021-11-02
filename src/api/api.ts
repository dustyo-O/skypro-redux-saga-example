import { playerListInit } from "../store/actions";

const backendDomain = 'http://localhost:5000';

export type LoginResponse = {
  status: 'ok' | 'error',
  token?: string
};

export type PlayerResponse = {
  login: string,
}

export type PlayerListResponse = {
  status: 'ok' | 'error',
  list: PlayerResponse[],
}

export const api = {
  login: async function(login: string) {
    const response = await fetch(`${backendDomain}/login?login=${login}`);

    const json: LoginResponse = await response.json();

    return json;
  },

  playerList: async function(token: string) {
    const response = await fetch(`${backendDomain}/player-list?token=${token}`);

    const json: PlayerListResponse = await response.json();

    return json;
  }
};
