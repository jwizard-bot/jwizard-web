type RunningStatusCount = {
  up: number;
  down: number;
};

export type InstanceStatusResDto = {
  id: number;
  name: string;
  color: string;
  avatarUrl: string;
  shards: RunningStatusCount;
  processes: RunningStatusCount;
  avgShardGatewayPing: number;
  avgShardsPerProcess: number;
  servers: number;
  users: number;
  activeAudioPlayers: number;
  audioListeners: number;
};
