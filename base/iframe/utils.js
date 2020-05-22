function isInFrame () {
    if (window == top) { // current window == window.top?
        alert('The script is in the topmost window, not in a frame');
      } else {
        alert('The script runs in a frame!');
      }
}