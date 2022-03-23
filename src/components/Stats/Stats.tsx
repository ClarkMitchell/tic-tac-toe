import { useGameHistory } from "../../context/game-history";
import "./styles.css";

export default function Stats() {
  const { state } = useGameHistory();

  return (
    <aside className="stats" aria-label="Player wins and ties.">
      <article role="region" className="stat-tile x-wins">
        <div className="stat-label">X wins</div>
        <div className="number">{state.X}</div>
      </article>
      <article role="region" className="stat-tile ties">
        <div className="stat-label">Ties</div>
        <div className="number">{state.ties}</div>
      </article>
      <article role="region" className="stat-tile o-wins">
        <div className="stat-label">O wins</div>
        <div className="number">{state.O}</div>
      </article>
    </aside>
  );
}
