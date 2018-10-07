
/**
 *
 * @type {[number,number,number]}
 */
// [hour, minutes, seconds]
var time = [0, 0, 0];
const TIME_IDS = ["hour", "min", "sec"];
var timer = null;
var done = false;

// validates the input and starts the timer
function startTimer() {
    validate();
    if (timer == null) {
        done = false;
        timer = setInterval(myTimer, 1000);
    }
}

function stopTimer() {
    timer = clearTimer(time, timer)
}

// validate the inputs by going through each time slot in the time array
function validate() {
    time = validateTime(time);
    if (isNaN(time[0]) || time[0] < 0 || (time[0] % 1) != 0) {
        alert("Not a Natural Number");
        time[0] = 0;
    }
    updateElements(TIME_IDS, time);
}

function myTimer() {
    if (time[2] == 0) {
        timeSwitch();
        if (done) {
            return;
        }
    }
    time[2]--;
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