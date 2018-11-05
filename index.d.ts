module.exports = function runWithFPS(
  fn: (time: number) => any,
  fps: number
): () => any {}