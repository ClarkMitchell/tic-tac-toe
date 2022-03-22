import { Winner } from "../../types";
import X from "../X";
import O from "../O";

interface Props {
  winner?: Winner;
}

export default function BannerHeadline({ winner }: Props) {
  if (winner) {
    return (
      <h1 className={winner === "X" ? "green" : "yellow"}>
        {winner === "X" ? <X /> : <O />} Takes the Round
      </h1>
    );
  }

  return <h1>Round Tied</h1>;
}
