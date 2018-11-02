module.exports = function runWithFps (fn, fps) {
  var interval = 1000 / fps;
  var then = Date.now();
  var stopped = false;

  function run() {
    requestAnimationFrame(run);

    var now = Date.now();
    var delta = now - then;

    if (delta > interval && !stopped) {
      then = now - (delta % interval);
      fn(now);
    }
  };

  run();

  return function() {
    stopped = true;
  }
};