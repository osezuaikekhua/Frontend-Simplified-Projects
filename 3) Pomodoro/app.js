const timerMilliSeconds = document.querySelector('.timer__milliseconds')
const timerSeconds = document.querySelector('.timer__seconds')
const timerMinutes = document.querySelector('.timer__minutes')
const startButton = document.querySelector('.stopwatch__start')
const stopButton = document.querySelector('.stopwatch__stop')
const resetButton = document.querySelector('.stopwatch__reset')

let cancelId;
let startTime;
//make sure to set to 0 by default bcuz you'll get an error
let savedTime = 0;
//Getting 25 minutes in miliseconds
const countdown = 25 * 60 * 1000

function startTimer() {
  startButton.disabled = true
  stopButton.disabled = false
  resetButton.disabled = false

  startTime = Date.now();
  //putting the request animation frame in the funciton you want to start it in
  //then in the parenthese you put the funciton you want to call every frame
  //In order to stop the frame you need to make a global cancel id variable
  cancelId = requestAnimationFrame(updateTimer)
}

function stopTimer() {
  startButton.disabled = false
  stopButton.disabled = true
  resetButton.disabled = false

  //getting the current time by subtracting formt he time we started to date.now()
  //make sure to add save time as well so it will update
  savedTime += Date.now() - startTime;
  cancelAnimationFrame(cancelId)
}

function resetTimer() {
  startTime = Date.now();
  savedTime = 0;

  timerMilliSeconds.innerHTML = "000"
  timerSeconds.innerHTML = "00";
  timerMinutes.innerHTML = "25";
}

function updateTimer() {
  //in order to get the milisecond increasing we need subtract the start time from Date.now
  let millisElapsed = Date.now() - startTime + savedTime
  //This shows us time left in miliseconds from 25 minutes
  let millisLeft = countdown - millisElapsed

  //Checking if timer has ended
  if (millisLeft < 0) {
    millisLeft = 0;
    cancelAnimationFrame(cancelId)
    cancelId = null
  }
  //Getting the minutes and seconds in miliseconds
  let secondsLeft = millisLeft / 1000
  let minutesLeft = secondsLeft / 60

  //Rounding rounding it down and dividing according to get the actual miliseconds, seconds, and minutes
  let millisText = millisLeft % 1000;
  let secondsText = Math.floor(secondsLeft) % 60;
  let minutesText = Math.floor(minutesLeft);

  //Add a zero in the front if there's no number in the tenth place
  //We converting it to a string to see how many numbers are in it
  if (minutesText.toString().length < 2) {
    minutesText = minutesText.toString().padStart(2, '0')
  }
  if (secondsText.toString().length < 2) {
    secondsText = secondsText.toString().padStart(2, '0')
  }
  if (millisText.toString().length < 3) {
    millisText = millisText.toString().padStart(3, '0')
  }

  //Putting numbers in the hmtl
  timerMilliSeconds.innerHTML = millisText
  timerSeconds.innerHTML = secondsText;
  timerMinutes.innerHTML = minutesText;

  if (cancelId) {
    //Need to put requestanimation in here to have it called every single frame
    cancelId = requestAnimationFrame(updateTimer)
  }
}