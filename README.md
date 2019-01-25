# Run function with defined FPS

## Usage

```es6
import runWithFPS from 'run-with-fps';

const stop = runWithFPS((time) => {
  console.log(time);
  // draw something here
}, 60);

stop(); // this will stop running

```