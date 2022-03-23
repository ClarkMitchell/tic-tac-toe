import { useMemo } from "react";
import { getRandomAnimation } from "../../utils";

interface Props {
  noAnimation?: boolean;
}

export default function O({ noAnimation = false }: Props) {
  const animation = useMemo(
    () => getRandomAnimation(["pop-up", "drop-in", "fade-up"]),
    []
  );

  return (
    <svg
      data-animation={!noAnimation && animation}
      width="64"
      height="64"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="O"
    >
      <path
        d="M32 0c17.673 0 32 14.327 32 32 0 17.673-14.327 32-32 32C14.327 64 0 49.673 0 32 0 14.327 14.327 0 32 0Zm0 18.963c-7.2 0-13.037 5.837-13.037 13.037 0 7.2 5.837 13.037 13.037 13.037 7.2 0 13.037-5.837 13.037-13.037 0-7.2-5.837-13.037-13.037-13.037Z"
        fill="currentColor"
      />
    </svg>
  );
}
