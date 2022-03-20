import { Modal } from "react-responsive-modal";

interface Props {
  open: boolean;
  onClose: () => void;
  eyebrow: string;
  headline: string;
  cancel?: string;
  next?: string;
}

export default function Banner({
  open,
  onClose,
  eyebrow,
  headline,
  cancel = "Quit",
  next = "Next Round",
}: Props) {
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
      <h1 id="headline">{headline}</h1>
      <div className="buttons">
        <button className="gray">{cancel}</button>
        <button className="yellow inverted">{next}</button>
      </div>
    </Modal>
  );
}
