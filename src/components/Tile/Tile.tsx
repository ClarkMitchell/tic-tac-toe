import X from "../X";
import O from "../O";
import { useContext, useMemo } from "react";
import { GameStateContext } from "../../context/game-state";

interface Props {
  row: number;
  column: number;
}

export default function Tile({ row, column }: Props) {
  const { state, dispatch } = useContext(GameStateContext);

  const isWinRow = useMemo(
    () => state.winRow[row][column],
    [column, row, state.winRow]
  );

  const currentTile = useMemo(
    () => state.board[row][column].trim(),
    [column, row, state.board]
  );

  function classes() {
    const classes = ["tile"];

    if (currentTile === "X") {
      classes.push("green");

      if (isWinRow === "X") {
        classes.push("inverted");
      }
    }

    if (currentTile === "O") {
      classes.push("yellow");

      if (isWinRow === "O") {
        classes.push("inverted");
      }
    }

    return classes.join(" ");
  }

  function handleMove() {
    if (currentTile || state.winner) return;
    dispatch({ row, column });
  }

  return (
    <button className={classes()} onClick={handleMove}>
      {currentTile === "X" && <X />}
      {currentTile === "O" && <O />}
    </button>
  );
}
