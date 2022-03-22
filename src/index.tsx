import React from "react";
import ReactDOM from "react-dom";
import "react-responsive-modal/styles.css";
import "./assets/css/reset.css";
import "./assets/css/global.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GameHistoryProvider } from "./context/game-history";
import { GameStateProvider } from "./context/game-state";

ReactDOM.render(
  <React.StrictMode>
    <GameHistoryProvider>
      <GameStateProvider>
        <App />
      </GameStateProvider>
    </GameHistoryProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals((input) => console.log("vitals", input));
