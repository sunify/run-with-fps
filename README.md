# run-with-fps

Runs a function with given FPS

## Usage

```es6
import runWithFPS from 'run-with-fps';

const stop = runWithFPS((delta) => {
  console.log(delta); // ms between prev and current frame
  // draw something here
}, 60);

stop(); // this will stop running

```
