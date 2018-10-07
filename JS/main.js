
//update the html elements on the screen
function updateElements(id, value) {
    for (i = 0; i < id.length; i++) {
        document.getElementById(id[i]).value = value[i] + "";
    }
}

// validate the inputs by going through each time slot in the time array
function validateTime(time) {
    for (i = time.length - 1; i > 0; i--) {
        if (isNaN(time[i]) || time[i] < 0 || (time[i] % 1) != 0) {
            alert("Not a Natural Number");
            time[i] = 0;
        } else if (time[i] > 60) {
            time[i] = 60;
        }
    }
    return time;
}

//stop the timer interval
function stopInterval(timer) {
    clearInterval(timer);
    timer = null;
    return timer;
}

//clear the timer when the user clicks Reset
function clearTimer(time, timer) {
    for (i = 0; i < time.length; i++) {
        time[i] = 0;
    }
    updateElements(TIME_IDS, time);
    return stopInterval(timer);
}