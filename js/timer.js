/**
 *
 * @type {[number,number,number]}
 */

// [hour, minutes, seconds]
var time = [0, 0, 0];
const TIME_IDS = ["hour", "min", "sec"];
var timer = null;

// validates the input and starts the timer
function startTimer() {
    validate();
    if (timer == null) {
        timer = setInterval(myTimer, 1000);
    }
}

// validate the inputs by going through each time slot in the time array
function validate() {
    if (isNaN(time[2]) || time[2] < 0 || (time[2] % 1) != 0) {
        alert("Not a Natural Number");
        time[2] = 0;
    } else if (time[2] > 60) {
        time[2] = 60;
    }

    if (isNaN(time[1]) || time[1] < 0 || (time[1] % 1) != 0) {
        alert("Not a Natural Number");
        time[1] = 0;
    } else if (time[1] > 60) {
        time[1] = 60;
    }

    if (isNaN(time[0]) || time[0] < 0 || (time[0] % 1) != 0) {
        alert("Not a Natural Number");
        time[0] = 0;
    }
    update();
}

//stop the timer interval
function stopInterval() {
    clearInterval(timer);
    timer = null;
}

//clear the timer when the user clicks Reset
function clearTimer() {
    time[0] = time[1] = time[2] = 0;
    update();
    stopInterval();
}

//this represents the actual timer which has all timer logic
function myTimer() {
    if (time[2] == 0 && time[1] == 0 && time[0] == 0) {
        stopInterval();
        alert("Done");
        return;
    } else if (time[2] == 0 && time[1] == 0 && time[0] != 0) {
        time[0]--;
        time[1] += 59;
        time[2] += 60;
    } else if (time[2] == 0 && time[1] != 0) {
        time[1]--;
        time[2] += 60;
    }
    time[2]--;
    update();
}

function update() {
    for (i = 0; i < time.length; i++) {
        updateElement(TIME_IDS[i], time[i])
    }
}