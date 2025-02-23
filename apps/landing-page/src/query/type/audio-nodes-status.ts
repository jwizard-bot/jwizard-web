export type AudioNodeStatus = {
  up: boolean;
  id: number;
  name: string;
  pool: string;
  region: string;
  version: string;
  lavaplayerVersion: string;
  players: number;
  playingPlayers: number;
  uptime: number;
  responseTime: string;
};

export type AudioNodesStatusResDto = {
  externalServicesUrl: string;
  nodes: AudioNodeStatus[];
};
