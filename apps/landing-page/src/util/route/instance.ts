type RouteProps = {
  // optional, if not provided, selected first instance, otherwise 404
  instanceId: string[];
};

const findMatchingInstanceId = (instanceProps: string[], instanceIds: number[]): number | null => {
  if (instanceProps && instanceProps.length > 1) {
    return null;
  }
  let currentInstanceId: number;
  if (!instanceProps) {
    const firstInstance = instanceIds[0];
    if (firstInstance === undefined) {
      return null;
    }
    currentInstanceId = firstInstance;
  } else {
    const firstParam = instanceProps[0];
    if (firstParam === undefined) {
      return null;
    }
    const userSelectedInstanceId = parseInt(firstParam);
    if (isNaN(userSelectedInstanceId) || !instanceIds.includes(userSelectedInstanceId)) {
      return null;
    }
    currentInstanceId = userSelectedInstanceId;
  }
  return currentInstanceId;
};

export { type RouteProps, findMatchingInstanceId };
