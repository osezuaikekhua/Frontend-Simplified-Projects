const timerMilliseconds = document.querySelector('.timer__milliseconds');
const timerSeconds = document.querySelector('.timer__seconds')
const timerMinutes = document.querySelector('.timer__minutes')

let cancelId;
let startTime;
let savedTime = 0;

function startTimer() {
  //Date.now gives us the time from 1987 to now
  startTime = Date.now()
  //Need to call request aninmation frame to loop over this function "update timer infintely"
  //Add the same code in the function u want to infineltely run "update timer"
  //In order to stop the frame you need to make a global cancel id variable
  cancelId = requestAnimationFrame(updateTimer)
}

function stopTimer() {
  //We add "savetime" to the previous saved time to make sure that the time doesn't reset when clicking stop
  savedTime = savedTime + Date.now() - startTime;
  //When cancelling an animation frame you have to use the cancel id so I just made "Cancel ID" global
  cancelAnimationFrame(cancelId);
}

function resetTimer() {
  //We are just reinitializing everything to reset it
  startTime = Date.now();
  savedTime = 0

  timerMilliseconds.innerHTML = '000';
  timerSeconds.innerHTML = '00';
  timerMinutes.innerHTML = '00';
}

function updateTimer() {
  //Formatting time

  //in order to get the milisecond increasing we need subtract the start time from Date.now
  let millisElapsed = savedTime + Date.now() - startTime
  //Getting the minutes and seconds in miliseconds
  let secondsElapsed = millisElapsed / 1000;
  let minutesElapsed = secondsElapsed / 60;

  //Rounding rounding it down and dividing according to get the actual miliseconds, seconds, and minutes
  let minutesText = Math.floor(minutesElapsed)
  let secondsText = Math.floor(secondsElapsed % 60)
  let millisText = millisElapsed % 1000

  //Add a zero in the front if there's no number in the tenth place
  //We converting it to a string to see how many numbers are in it
  if (minutesText.toString().length === 1) {
    minutesText = '0' + minutesText;
  }
  if (secondsText.toString().length === 1) {
    secondsText = '0' + secondsText
  }
  if (millisText.toString().length < 3) {
    millisText = millisText.toString().padStart(3, '0');
  }

  //Putting it into the html
  timerMilliseconds.innerHTML = millisText;
  timerSeconds.innerHTML = secondsText;
  timerMinutes.innerHTML = minutesText;

  cancelId = requestAnimationFrame(updateTimer)
}