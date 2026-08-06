/**
 * Engine stub — placeholder for the future game loop.
 */
export function createEngine(options = {}) {
  return {
    options,
    started: false,
    start() {
      this.started = true;
    },
    stop() {
      this.started = false;
    },
  };
}
