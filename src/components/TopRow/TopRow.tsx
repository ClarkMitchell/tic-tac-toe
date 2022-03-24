import iconX from "../../assets/img/icon-x.svg";
import iconO from "../../assets/img/icon-o.svg";
import iconRestart from "../../assets/img/icon-restart.svg";
import { useGameState } from "../../context/game-state";
import { useAriaLive } from "../../context/aria-live";
import { useEffect } from "react";
import "./styles.css";

export default function TopRow() {
  return (
    <div className="top-row">
      <Icons />
      <Turn />
      <Restart />
    </div>
  );
}

function Icons() {
  return (
    <div className="icons">
      <svg width="72" height="32" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fill-rule="evenodd">
          <path
            d="M8.562 1.634 16 9.073l7.438-7.439a3 3 0 0 1 4.243 0l2.685 2.685a3 3 0 0 1 0 4.243L22.927 16l7.439 7.438a3 3 0 0 1 0 4.243l-2.685 2.685a3 3 0 0 1-4.243 0L16 22.927l-7.438 7.439a3 3 0 0 1-4.243 0L1.634 27.68a3 3 0 0 1 0-4.243L9.073 16 1.634 8.562a3 3 0 0 1 0-4.243L4.32 1.634a3 3 0 0 1 4.243 0Z"
            fill="#31C3BD"
          />
          <path
            d="M56.1 0c8.765 0 15.87 7.106 15.87 15.87 0 8.766-7.105 15.871-15.87 15.871-8.765 0-15.87-7.105-15.87-15.87C40.23 7.106 47.334 0 56.1 0Zm0 9.405a6.466 6.466 0 1 0 0 12.931 6.466 6.466 0 0 0 0-12.931Z"
            fill="#F2B137"
            fill-rule="nonzero"
          />
        </g>
      </svg>
    </div>
  );
}

function Turn() {
  const { state } = useGameState();
  const { setMessage } = useAriaLive();

  useEffect(() => {
    setMessage(`Player ${state.player}, it is your turn.`);
  }, [state.player, setMessage]);

  return (
    <div role="region" className="turn-tile">
      <img
        src={state.player === "X" ? iconX : iconO}
        height="20"
        width="20"
        alt=""
      />
      Turn
    </div>
  );
}

function Restart() {
  const { dispatch } = useGameState();

  return (
    <div className="restart">
      <button
        aria-label="Restart game"
        onClick={() => dispatch({ type: "RESET" })}
      >
        <img src={iconRestart} height="20" width="20" alt="" />
      </button>
    </div>
  );
}
