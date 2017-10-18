global.requestAnimationFrame = /* istanbul ignore next */ (callback) => {
  setTimeout(callback, 0)
}
