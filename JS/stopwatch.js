
/**
 *
 * @type {[number,number,number]}
 */
var time = [0, 0, 0, 0];
const TIME_IDS = ["hour", "min", "sec", "hundsec"];
var timer = null;

function startTimer() {
    timer = setInterval(myTimer, 10);
}

function stopTimer() {
    stopInterval(timer);
}

function resetTimer() {
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
    if (time[3] == 100) {
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