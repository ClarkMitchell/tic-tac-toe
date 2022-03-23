import React from "react";
import Game from "./components/Game";
import { useEffect } from "react";
import { useGameState } from "./context/game-state";
import { useGameHistory } from "./context/game-history";
import Banner from "./components/Banner";

function App() {
  const { state } = useGameState();
  const { update } = useGameHistory();

  useEffect(() => {
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
  }, [state.winner, update]);

  useEffect(() => {
    if (state.tied) {
      update((history) => ({
        ...history,
        ties: history.ties + 1,
      }));
    }
  }, [state.tied, update]);

  return (
    <main>
      <Game />
      <Banner />
    </main>
  );
}

export default App;
