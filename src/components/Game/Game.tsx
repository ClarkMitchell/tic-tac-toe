import { useState, useContext, useEffect } from "react";
import { GameStateContext } from "../../context/game-state";

import Board from "../Board";
import Banner from "../Banner";

export default function Game() {
  const [isBannerDisplayed, setIsBannerDisplayed] = useState(false);
  const { state, dispatch } = useContext(GameStateContext);

  useEffect(() => {
    if (state.winner) {
      setIsBannerDisplayed(true);
    }
  }, [state.winner]);

  return (
    <main>
      <Board />
      <Banner
        open={isBannerDisplayed}
        onClose={() => setIsBannerDisplayed(false)}
        eyebrow="Game Over"
        headline="You win!"
      />
    </main>
  );
}
