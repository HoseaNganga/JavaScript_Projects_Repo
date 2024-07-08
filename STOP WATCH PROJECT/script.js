//SELECT RELEVANT DOM ELEMENTS
const millisecondBox = document.getElementById(`millisecondsnumber`);
const secondBox = document.getElementById(`secondsnumber`);
const minuteBox = document.getElementById(`minutenumber`);
const hourBox = document.getElementById(`hournumber`);
const startButton = document.getElementById(`startButton`);
const stopButton = document.getElementById(`stopButton`);
const resetButton = document.getElementById(`resetButton`);

//INITALIZE VARIABLES
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let hours = 0;
let stopWatchTimer = null; //This is the variable to which we assign the set interval

//ADD EVENT LISTENER TO THE BUTTONS
startButton.addEventListener(`click`, startStopWatch);
stopButton.addEventListener(`click`, stopStopWatch);
resetButton.addEventListener(`click`, resetStopWatch);

//fUNCTION TO START STOPWATCH
function startStopWatch() {
  //IF STATEMENT TO CHECK IF OUR SETINTERVAL IS NULL
  if (stopWatchTimer) {
    //IF NULL WE RETURN NULL
    return;
  } else {
    //LOGIC BEHIND THE STOPWATCH
    stopWatchTimer = setInterval(() => {
      milliseconds++;
      if (milliseconds > 999) {
        seconds++;
        milliseconds = 0;
      }
      if (seconds > 59) {
        minutes++;
        seconds = 0;
      }
      if (minutes > 59) {
        hours++;
        minutes = 0;
      }

      //INCORPORATE THE FIGURE INTO THE DOM
      millisecondBox.innerText = sortTime(milliseconds);
      secondBox.innerText = sortTime(seconds);
      minuteBox.innerText = sortTime(minutes);
      hourBox.innerText = sortTime(hours);
    }, 1);
  }
}

//FUNCTION TO STOP THE STOP WATCH
function stopStopWatch() {
  clearInterval(stopWatchTimer);
  stopWatchTimer = null;
}

//FUNCTION TO RESET STOPWATCH
function resetStopWatch() {
  stopStopWatch();
  milliseconds = 0;
  seconds = 0;
  minutes = 0;
  hours = 0;
  millisecondBox.innerText = `00`;
  secondBox.innerText = `00`;
  minuteBox.innerText = `00`;
  hourBox.innerText = `00`;
}

//FUNCTION TO SORT TIME IF TIME IS LESS THAN 10
function sortTime(time) {
  if (time < 10) {
    return `0${time}`;
  } else {
    return time;
  }
}
