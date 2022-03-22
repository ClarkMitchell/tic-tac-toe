import { useGameHistory } from "../../context/game-history";
import "./styles.css";

export default function Stats() {
  const { state } = useGameHistory();

  return (
    <aside className="stats">
      <article className="stat-tile x-wins">
        <div>X wins</div>
        <div className="number">{state.X}</div>
      </article>
      <article className="stat-tile ties">
        <div>Ties</div>
        <div className="number">{state.ties}</div>
      </article>
      <article className="stat-tile o-wins">
        <div>O wins</div>
        <div className="number">{state.O}</div>
      </article>
    </aside>
  );
}
