
/**
 *
 * @type {[number,number,number]}
 */
var time = [0, 0, 0, 0];
const TIME_IDS = ["hour", "min", "sec", "tenthsec"];
var timer = null;
var stopped = true;


function startTimer() {
    if (timer == null) {
        stopped = false;
        timer = setInterval(myTimer, 100);
    } else if (timer != null) {
        alert("called");
        stopped = false;
        startTimer()
    } else {
        stopped = true;
        stopInterval(timer)
    }
}

function stopTimer() {
    stopInterval(timer);
}

function resetTimer() {
    stopped = true;
    timer = clearTimer(time, timer);
}

function myTimer() {
    if (time[3] >= 10) {
        timeSwitch();
    }
    time[3]++;
    updateElements(TIME_IDS, time);
}

function timeSwitch() {
    if (time[3] == 10) {
        time[2] += 1;
        time[3] = 0;
    }
    if (time[2] == 60) {
        time[1] += 1;
        time[2] = 0;
    }
    if (time[1] == 60) {
        time[0] += 1;
        time[1] = 0;
    }
}