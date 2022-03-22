import TopRow from "../TopRow";
import Board from "../Board";
import Stats from "../Stats";

export default function Game() {
  return (
    <section className="game">
      <TopRow />
      <Board />
      <Stats />
    </section>
  );
}
