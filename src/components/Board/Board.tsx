import Tile from "../Tile";

interface Props {
  children: React.ReactNode;
}

export function Board({ children }: Props) {
  return (
    <section className="grid">
      {new Array(3).map((_, row) =>
        new Array(3).map((_, column) => <Tile row={row} column={column} />)
      )}
    </section>
  );
}
