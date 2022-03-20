import Tile from "../Tile";

interface Props {
  children: React.ReactNode;
}

export function Board({ children }: Props) {
  return (
    <section className="grid">
      <Tile />
      <Tile player="o" />
      <Tile player="x" />
      <Tile player="o" />
      <Tile player="x" />
      <Tile player="o" />
      <Tile player="x" />
      <Tile player="o" />
      <Tile player="o" />
    </section>
  );
}
