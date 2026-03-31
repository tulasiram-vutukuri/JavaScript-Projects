const hrsText = document.getElementById("hrsText");
const minText = document.getElementById("minText");
const secText = document.getElementById("secText");

const startBtn = document.getElementById("startbtn");
const pauseBtn = document.getElementById("pauseBtn");
const resetBtn = document.getElementById("resetBtn");

let startTime = 0;
let elapsedTime = 0;
let interval = null;
let isRunning = false;

function startFunction() {
    if (isRunning || elapsedTime > 0) return;

    startTime = Date.now();

    interval = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        updateDisplay();
    }, 100);

    isRunning = true;
}

function pauseFunction() {
    if (isRunning) {
        clearInterval(interval);
        isRunning = false;
        pauseBtn.textContent = "Resume";
    } else if (elapsedTime > 0) {
        // Resume only if already started
        startTime = Date.now() - elapsedTime;

        interval = setInterval(() => {
            elapsedTime = Date.now() - startTime;
            updateDisplay();
        }, 100);

        isRunning = true;
        pauseBtn.textContent = "Pause";
    }
}

function resetFunction() {
    clearInterval(interval);
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;

    pauseBtn.textContent = "Pause";

    updateDisplay();
}

function updateDisplay() {
    let hrs = Math.floor(elapsedTime / (1000 * 60 * 60));
    let mins = Math.floor(elapsedTime / (1000 * 60)) % 60;
    let secs = Math.floor(elapsedTime / 1000) % 60;

    hrsText.textContent = formatTime(hrs);
    minText.textContent = formatTime(mins);
    secText.textContent = formatTime(secs);
}

function formatTime(value) {
    return value < 10 ? "0" + value : value;
}

startBtn.addEventListener("click", startFunction);
pauseBtn.addEventListener("click", pauseFunction);
resetBtn.addEventListener("click", resetFunction);

document.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
        event.preventDefault();

        if (!isRunning && elapsedTime === 0) {
            startFunction();       // first start
        } else {
            pauseFunction();       // pause / resume
        }
    }
});