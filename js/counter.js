
var count = 0;
const COUNT_ID = "count";

function clearCount() {
    count = 0;
    updateElement(COUNT_ID, count);
}

function incrementCounter() {
    count++;
    updateElement(COUNT_ID, count);
}

