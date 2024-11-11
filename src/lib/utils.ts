export const formatNumber = (value: bigint | undefined) => {
  if (value === undefined) return "Loading...";
  return Number(value.toString()) / 1e18;
};
