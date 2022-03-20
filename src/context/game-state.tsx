import createReducerContext from "./create-reducer-context";

type Player = "X" | "O";

const defaultBoardState = [
  [" ", " ", " "],
  [" ", " ", " "],
  [" ", " ", " "],
];

interface GameState {
  player: Player;
  board: typeof defaultBoardState;
  winner: Player | null;
  winRow: typeof defaultBoardState;
}

const defaultGameState: GameState = {
  player: "X",
  board: defaultBoardState,
  winner: null,
  winRow: defaultBoardState,
};

export type Action = { row: number; column: number };
function reducer(state: GameState, action: Action): GameState {
  const board = [...state.board];

  board[action.row][action.column] = state.player;
  const { winner, winRow } = checkForWin(board, state.player, action);

  if (winner) {
    console.log({ winner, winRow });
  }

  return {
    player: state.player === "X" ? "O" : "X",
    board,
    winner,
    winRow,
  };
}

type winState = { winner: Player | null; winRow: typeof defaultBoardState };
function checkForWin(
  board: GameState["board"],
  player: Player,
  action: Action
): winState {
  let row = 0,
    column = 0,
    diagonal = 0,
    rDiagonal = 0;

  let winRow = [
    [" ", " ", " "],
    [" ", " ", " "],
    [" ", " ", " "],
  ];

  const W = player;

  for (const i of [0, 1, 2]) {
    if (board[i][action.column] === player) {
      column++;
    }
    if (board[action.row][i] === player) {
      row++;
    }
    if (board[i][i] === player) {
      diagonal++;
    }
    if (board[i][2 - i] === player) {
      rDiagonal++;
    }

    if (column === 3) {
      winRow[0][action.column] = W;
      winRow[1][action.column] = W;
      winRow[2][action.column] = W;

      return { winner: player, winRow };
    }

    if (row === 3) {
      winRow[action.row][0] = W;
      winRow[action.row][1] = W;
      winRow[action.row][2] = W;

      return { winner: player, winRow };
    }

    if (diagonal === 3) {
      return {
        winner: player,
        winRow: [
          [W, " ", " "],
          [" ", W, " "],
          [" ", " ", W],
        ],
      };
    }

    if (rDiagonal === 3) {
      return {
        winner: player,
        winRow: [
          [" ", " ", W],
          [" ", W, " "],
          [W, " ", " "],
        ],
      };
    }
  }

  return { winner: null, winRow };
}

export const [GameStateContext, GameStateProvider] = createReducerContext(
  reducer,
  defaultGameState
);
