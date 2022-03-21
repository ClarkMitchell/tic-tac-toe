import { ReactNode, useContext } from "react";
import { Modal } from "react-responsive-modal";
import { useGameState } from "../../context/game-state";

interface Props {
  open: boolean;
  onClose: () => void;
  eyebrow: string;
  cancel?: string;
  next?: string;
  children: ReactNode;
}

export default function Banner({
  open,
  onClose,
  eyebrow,
  cancel = "Quit",
  next = "Next Round",
  children,
}: Props) {
  const { dispatch } = useGameState();

  function reset() {
    dispatch({ type: "RESET" });
    onClose();
  }

  return (
    <Modal
      open={open}
      onClose={onClose}
      center
      aria-labelledby="headline"
      aria-describedby="eyebrow"
      classNames={{ modal: "banner", modalAnimationIn: "fade-up" }}
      animationDuration={900}
      closeIcon={<svg id="close"></svg>}
    >
      {eyebrow && <p id="eyebrow">{eyebrow}</p>}
      {children}
      <div className="buttons">
        <button className="gray" onClick={reset}>
          {cancel}
        </button>
        <button className="yellow inverted" onClick={reset}>
          {next}
        </button>
      </div>
    </Modal>
  );
}
