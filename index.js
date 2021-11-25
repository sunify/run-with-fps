module.exports = function runWithFPS (fn, fps) {
  var interval = 1000 / fps;
  var then = Date.now();
  var stopped = false;
  let animationFrame;

  function run() {
    if (!stopped) {
      animationFrame = requestAnimationFrame(run);
    }

    var now = Date.now();
    var delta = now - then;

    if (delta > interval && !stopped) {
      then = now - (delta % interval);
      fn(delta);
    }
  };

  animationFrame = requestAnimationFrame(run);
  fn(0);

  return function() {
    stopped = true;
    cancelAnimationFrame(animationFrame);
  }
};