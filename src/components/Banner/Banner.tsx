import { ReactNode } from "react";
import { Modal } from "react-responsive-modal";
import { useGameState } from "../../context/game-state";
import { useGameHistory, defaultGameHistory } from "../../context/game-history";
import X from "../X";
import O from "../O";
import "./styles.css";

export default function Banner() {
  const { state } = useGameState();

  return (
    <>
      <ModalWrapper open={state.winner === "X"}>
        <p id="eyebrow">Player 1 Wins!</p>
        <h1 className="green">
          <X noAnimation /> Takes the Round
        </h1>
      </ModalWrapper>
      <ModalWrapper open={state.winner === "O"}>
        <p id="eyebrow">Player 2 Wins!</p>
        <h1 className="yellow">
          <O noAnimation /> Takes the Round
        </h1>
      </ModalWrapper>
      <ModalWrapper open={state.tied === true}>
        <h1>Round Tied</h1>
      </ModalWrapper>
    </>
  );
}

function ModalWrapper({
  open,
  children,
}: {
  open: boolean;
  children: ReactNode;
}) {
  const { dispatch } = useGameState();
  const { update } = useGameHistory();

  function handleClose() {
    dispatch({ type: "RESET" });
  }

  function quit() {
    update(defaultGameHistory);
    handleClose();
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      center
      aria-labelledby="headline"
      aria-describedby="eyebrow"
      classNames={{
        modal: "banner",
        modalAnimationIn: "fade-up",
      }}
      animationDuration={900}
      closeIcon={false}
    >
      {children}
      <div className="buttons">
        <button className="gray" onClick={quit}>
          Quit
        </button>
        <button className="yellow inverted" onClick={handleClose}>
          Next Round
        </button>
      </div>
    </Modal>
  );
}
