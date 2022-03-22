import React from "react";
import Game from "./components/Game";
import { useState, useEffect } from "react";
import { useGameState } from "./context/game-state";
import { useGameHistory } from "./context/game-history";
import { Banner, BannerHeadline } from "./components/Banner";

function App() {
  const [isBannerDisplayed, setIsBannerDisplayed] = useState(false);
  const { state } = useGameState();
  const { update } = useGameHistory();

  useEffect(() => {
    if (state.winner || state.tied) {
      setIsBannerDisplayed(true);
    }

    if (state.winner === "X") {
      update((history) => ({
        ...history,
        X: history.X + 1,
      }));
    }

    if (state.winner === "O") {
      update((history) => ({
        ...history,
        O: history.O + 1,
      }));
    }

    if (state.tied) {
      update((history) => ({
        ...history,
        ties: history.ties + 1,
      }));
    }
  }, [state.winner, state.tied, update]);

  return (
    <main>
      <Game />
      <Banner
        open={isBannerDisplayed}
        onClose={() => setIsBannerDisplayed(false)}
        eyebrow={state.winner === "X" ? "Player 1 Wins!" : "Player 2 Wins!"}
      >
        <BannerHeadline winner={state.winner} />
      </Banner>
    </main>
  );
}

export default App;
