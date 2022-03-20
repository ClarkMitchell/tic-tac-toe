import Tile from "../Tile";

const three = new Array(3).fill(null);

export default function Board() {
  return (
    <section className="grid">
      {three.map((_, row) =>
        three.map((_, column) => (
          <Tile row={row} column={column} key={`${row}-${column}`} />
        ))
      )}
    </section>
  );
}
