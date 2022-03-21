export function getRandomAnimation(
  animations = ["pop-up", "spin-left", "spin-right", "drop-in", "fade-up"]
) {
  const randomIndex = Math.floor(Math.random() * animations.length);
  return animations[randomIndex];
}
