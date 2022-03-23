import { ReactNode, useEffect, useRef } from "react";
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
        <h1 id="headline" className="green">
          <X noAnimation />
          <span className="visually-hidden">X </span>
          Takes the Round
        </h1>
      </ModalWrapper>
      <ModalWrapper open={state.winner === "O"}>
        <p id="eyebrow">Player 2 Wins!</p>
        <h1 id="headline" className="yellow">
          <O noAnimation />
          <span className="visually-hidden">O </span>
          Takes the Round
        </h1>
      </ModalWrapper>
      <ModalWrapper open={state.tied === true}>
        <h1 id="headline">Round Tied</h1>
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
  const nextRef = useRef<HTMLButtonElement>(null);

  function handleClose() {
    dispatch({ type: "RESET" });
  }

  function quit() {
    update(defaultGameHistory);
    handleClose();
  }

  useEffect(() => {
    if (open && nextRef.current) {
      nextRef.current.focus();
    }
  }, [open]);

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
      <ul className="buttons" aria-label="Quit or continue buttons.">
        <li>
          <button className="gray" onClick={quit}>
            Quit
          </button>
        </li>
        <li>
          <button
            ref={nextRef}
            className="yellow inverted"
            onClick={handleClose}
          >
            Next Round
          </button>
        </li>
      </ul>
    </Modal>
  );
}
