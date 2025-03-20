let timer;

let seconds = 0, minutes = 0, hours = 0;

let running = false;

function startTimer() {

    if (!running) {

        running = true;

        timer = setInterval(updateTime, 1000);

    }

}

function stopTimer() {

    running = false;

    clearInterval(timer);

}

function resetTimer() {

    stopTimer();

    seconds = 0;

    minutes = 0;

    hours = 0;

    updateDisplay();

}

function updateTime() {

    seconds++;

    if (seconds == 60) {

        seconds = 0;

        minutes++;

    }

    if (minutes == 60) {

        minutes = 0;

        hours++;

    }

    updateDisplay();

}

function updateDisplay() {

    document.querySelector(".stopwatch").innerText =

        `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

}