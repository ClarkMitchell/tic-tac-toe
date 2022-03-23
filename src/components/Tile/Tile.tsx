import X from "../X";
import O from "../O";
import { useMemo } from "react";
import { useGameState } from "../../context/game-state";
import "./styles.css";

interface Props {
  row: number;
  column: number;
}

export default function Tile({ row, column }: Props) {
  const { state, dispatch } = useGameState();

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
    dispatch({ type: "MOVE", row, column });
  }

  function label() {
    let label = "";

    if (row === 0) {
      label += "Top";
    }
    if (row === 1) {
      label += "Middle";
    }
    if (row === 2) {
      label += "Bottom";
    }
    if (column === 0) {
      label += " Left";
    }
    if (column === 1) {
      label += " Center";
    }
    if (column === 2) {
      label += " Right";
    }
    if (currentTile) {
      label += `, Player ${currentTile} occupies this space.`;
    }

    return label;
  }

  return (
    <button className={classes()} onClick={handleMove} aria-label={label()}>
      {currentTile === "X" && <X />}
      {currentTile === "O" && <O />}
    </button>
  );
}
