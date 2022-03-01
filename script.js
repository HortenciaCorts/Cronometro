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
  if (sec > 59) {
    sec = 0;
    min++;
  }
  seconds.innerHTML = String(sec).padStart(2, '0');

  if (min > 59) {
    min = 0;
    hours++;

    createSpan.innerHTML = `${String(hours).padStart(2, '0')} :`;
    time.appendChild(createSpan);
    time.insertAdjacentElement("afterbegin", createSpan);
  }

  minuts.innerHTML = String(min).padStart(2, '0');
}

let interval;
start.addEventListener("click", function () {
  interval = setInterval(startTime, 10);
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
