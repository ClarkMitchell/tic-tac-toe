export function getRandomAnimation() {
  const animations = ["pop-up", "spin", "drop-in"];
  const randomIndex = Math.floor(Math.random() * animations.length);
  return animations[randomIndex];
}
