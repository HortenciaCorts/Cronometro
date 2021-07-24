const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const reset = document.querySelector("#reset");

const seconds = document.querySelector("#seconds");
const minuts = document.querySelector("#minuts");

const time = document.querySelector("#time");
const createSpan = document.createElement("span");
createSpan.setAttribute("id", "hours");

let sec = 0;
let min = 0;
let hours = 0;

function startTime() {
  sec++;
  if (sec < 60) {
    if (sec < 10) {
      seconds.innerHTML = `0${sec}`;
    } else if (sec > 9 && sec < 60) {
      seconds.innerHTML = sec;
    }
  } else if (sec > 59) {
    if (sec == 60) {
      sec = 0;
      seconds.innerHTML = `0${sec}`;
    }

    min++;
    if (min < 10) {
      minuts.innerHTML = `0${min}`;
    } else if (min > 9 && min < 60) {
      minuts.innerHTML = min;
    } else if (min > 59) {
      min = 0;
      minuts.innerHTML = `0${min}`;
      hours++;
      if (hours < 10) {
        createSpan.innerHTML = `0${hours} :`;
      } else if (hours > 9) {
        createSpan.innerHTML = `${hours} :`;
      }
      time.appendChild(createSpan);
      time.insertAdjacentElement("afterbegin", createSpan);
    }
  }
}

let interval;
start.addEventListener("click", function () {
  interval = setInterval(startTime, 1000);
});
stop.addEventListener("click", function () {
  clearInterval(interval);
});
reset.addEventListener("click", function () {
  clearInterval(interval);

  sec = 0;
  min = 0;
  hours = 0;
  seconds.innerHTML = "00";
  minuts.innerHTML = "00";
  time.removeChild(createSpan);
});
