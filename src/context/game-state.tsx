import createReducerContext from "./create-reducer-context";

type Player = "X" | "O";

const defaultBoardState = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];

interface GameState {
  player: Player;
  board: typeof defaultBoardState;
}

const defaultGameState: GameState = {
  player: "X",
  board: defaultBoardState,
};

function swapPlayer(player: Player): Player {
  return player === "X" ? "O" : "X";
}

type Action = { type: "move" };
function reducer(state: GameState, action: Action): GameState {
  switch (action.type) {
    case "move":
      return {
        ...state,
        player: swapPlayer(state.player),
      };
    default:
      throw new Error();
  }
}

export const [GameStateContext, GameStateProvider] = createReducerContext(
  reducer,
  defaultGameState
);
