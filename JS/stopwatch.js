
/**
 *
 * @type {[number,number,number]}
 */
var time = [0, 0, 0, 0];
const TIME_IDS = ["hour", "min", "sec", "tenthsec"];
var timer = null;


function startTimer() {
    if (timer == null) {
        done = false;
        timer = setInterval(myTimer, 100);
    }
}

function myTimer() {
    if (time[3] == 0) {
        timeSwitch();
    }
    time[3]++;
    updateElements(TIME_IDS, time);
}

function timeSwitch() {
    if (time[2] == 0 && time[1] == 0 && time[0] == 0) {
        stopInterval(timer);
        alert("Done");
        done = true;
    } else if (time[2] == 0 && time[1] == 0 && time[0] != 0) {
        time[0]--;
        time[1] += 59;
        time[2] += 60;
    } else if (time[2] == 0 && time[1] != 0) {
        time[1]--;
        time[2] += 60;
    }
}