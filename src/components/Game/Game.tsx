import { useState, useContext, useEffect } from "react";
import { GameStateContext } from "../../context/game-state";
import X from "../X";
import O from "../O";

import Board from "../Board";
import { Banner, BannerHeadline } from "../Banner";

export default function Game() {
  const [isBannerDisplayed, setIsBannerDisplayed] = useState(false);
  const { state, dispatch } = useContext(GameStateContext);

  useEffect(() => {
    if (state.winner || state.tied) {
      setIsBannerDisplayed(true);
    }
  }, [state.winner, state.tied]);

  return (
    <>
      <Board />
      <Banner
        open={isBannerDisplayed}
        onClose={() => setIsBannerDisplayed(false)}
        eyebrow={state.winner === "X" ? "Player 1 Wins!" : "Player 2 Wins!"}
      >
        <BannerHeadline winner={state.winner} />
      </Banner>
    </>
  );
}
