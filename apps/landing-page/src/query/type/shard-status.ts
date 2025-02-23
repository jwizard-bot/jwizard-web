export type ShardStatusResDto = {
  up: boolean;
  globalShardId: number;
  processGroupId: number;
  gatewayPing: number;
  servers: number;
  users: number;
  activeAudioPlayers: number;
  audioListeners: number;
};
