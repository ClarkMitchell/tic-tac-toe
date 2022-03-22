import createStateContext from "./create-state-context";

export const defaultGameHistory = {
  X: 0,
  O: 0,
  ties: 0,
};

export const [useGameHistory, GameHistoryProvider] =
  createStateContext(defaultGameHistory);
