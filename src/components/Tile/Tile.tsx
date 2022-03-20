import x from "../../assets/img/icon-x.svg";
import o from "../../assets/img/icon-o.svg";
import { useContext } from "react";
import { GameStateContext } from "../../context/game-state";

interface Props {
  row: number;
  column: number;
}

export function Tile({ row, column }: Props) {
  const { state, dispatch } = useContext(GameStateContext);

  return (
    <button className="tile" onClick={() => dispatch({ type: "move" })}>
      {/* {player && <img src={player === "x" ? x : o} alt="x" />} */}
    </button>
  );
}
