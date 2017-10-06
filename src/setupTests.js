/* eslint-disable */
global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};
