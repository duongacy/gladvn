import { a as useRefWithInit } from './useRenderElement-CBh4CqIk.js';
import { u as useOnMount } from './useAnimationFrame-BapKY_Lh.js';

'use client';
const EMPTY = 0;
class Timeout {
  static create() {
    return new Timeout();
  }
  currentId = EMPTY;

  /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */
  start(delay, fn) {
    this.clear();
    this.currentId = setTimeout(() => {
      this.currentId = EMPTY;
      fn();
    }, delay); /* Node.js types are enabled in development */
  }
  isStarted() {
    return this.currentId !== EMPTY;
  }
  clear = () => {
    if (this.currentId !== EMPTY) {
      clearTimeout(this.currentId);
      this.currentId = EMPTY;
    }
  };
  disposeEffect = () => {
    return this.clear;
  };
}

/**
 * A `setTimeout` with automatic cleanup and guard.
 */
function useTimeout() {
  const timeout = useRefWithInit(Timeout.create).current;
  useOnMount(timeout.disposeEffect);
  return timeout;
}

export { useTimeout as u };
//# sourceMappingURL=useTimeout-B9E2xS1v.js.map
