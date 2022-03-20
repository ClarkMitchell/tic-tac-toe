import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/reset.css";
import "./assets/css/global.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { GameStateProvider } from "./context/game-state";

ReactDOM.render(
  <React.StrictMode>
    <GameStateProvider>
      <App />
    </GameStateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals((input) => console.log("vitals", input));
