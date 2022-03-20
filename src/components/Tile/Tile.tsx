import x from "../../assets/img/icon-x.svg";
import o from "../../assets/img/icon-o.svg";
import { useContext } from "react";
import { GameStateContext } from "../../context/game-state";

interface Props {
  player?: string;
}

export function Tile({ player }: Props) {
  const { state, dispatch } = useContext(GameStateContext);

  return (
    <button className="tile" onClick={() => dispatch({ type: "move" })}>
      <span>{state.player}</span>
      {player && <img src={player === "x" ? x : o} alt="x" />}
    </button>
  );
}
