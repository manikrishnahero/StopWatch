const display = document.getElementById("display");

let hours = 0;
let minutes = 0;
let seconds = 0;
let timers = null;

// update time function
function update() {
    
  seconds++;

  if (seconds == 60) {
    seconds = 0;
    minutes++;
  }

  if (minutes == 60) {
    minutes = 0;
    hours++;
  }

  const hoursTime = hours < 10 ? "0" + hours : hours;
  const minutesTime = minutes < 10 ? "0" + minutes : minutes;
  const secondsTime = seconds < 10 ? "0" + seconds : seconds;

  display.innerText = `${hoursTime}:${minutesTime}:${secondsTime}`;
}

// Start time function
function start() {
  if (timers === null) {
    timers = setInterval(update, 1);
  }
}

// stop time function
function stop() {
  clearInterval(timers);
  timers = null;
}

// reset time function
function reset() {
  clearInterval(timers);
  timers = null;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  display.innerText = `00:00:00`;
}
