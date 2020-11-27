function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export default function randonColor() {
  const color =
    "rgb(" +
    getRandomInt(0, 255) +
    ", " +
    getRandomInt(0, 255) +
    ", " +
    getRandomInt(0, 255) +
    ")";

  return color;
}
