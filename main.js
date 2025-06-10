let isReset = false;
let isPaused = false;

let hours = 0;
let minutes = 0;
let second = 0;
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resumeBtn = document.getElementById('resumeBtn');
const resetBtn = document.getElementById('resetBtn');
const timeEl = document.querySelector('h3');

startBtn.addEventListener('click', startStopwatch);
pauseBtn.addEventListener('click', pauseStopwatch);
resumeBtn.addEventListener('click', startStopwatch);
resetBtn.addEventListener('click', resetStopwatch);

function startStopwatch() {
  const startInterval = setInterval(() => {
    second = second + 1;
    if (second == 60) {
      second = 0;
      minutes = minutes + 1;
    }
    if (minutes == 60) {
      minutes = 0;
      hours = hours + 1;
    }
    if (isReset) {
      hours = 0;
      minutes = 0;
      second = 0;
      clearInterval(startInterval);
      timeEl.innerHTML = `${hours} Hours : ${minutes} min : ${second} Sec`;
      isReset = false;
    }

    timeEl.innerHTML = `${hours} Hours : ${minutes} min : ${second} Sec`;
    if (isPaused) {
      clearInterval(startInterval);
      isPaused = false;
    }
  }, 1000);
}

function resetStopwatch() {
  isReset = true;
}
function pauseStopwatch() {
  isPaused = true;
}
