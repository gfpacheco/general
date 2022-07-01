export default function easeOut(
  fn: (progress: number) => void,
  duration: number,
  numberOfCalls: number,
) {
  const startTime = Date.now();
  const progressBetweenCalls = 1 / numberOfCalls;
  let timesCalled = 1;
  let stopped = false;

  function tick() {
    if (stopped) {
      return;
    }

    const time = Date.now() - startTime;
    const relative = time / duration;
    const progress = 1 - Math.pow(1 - relative, 2);

    if (relative >= 1) {
      fn(1);
    } else {
      if (progress / progressBetweenCalls > timesCalled) {
        timesCalled = Math.ceil(progress / progressBetweenCalls);
        fn(progress);
      }

      requestAnimationFrame(tick);
    }
  }

  function stop() {
    stopped = true;
  }

  tick();

  return stop;
}
