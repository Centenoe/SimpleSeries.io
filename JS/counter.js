
var count = [0];
const COUNT_ID = ["count"];

function clearCount() {
    count[0] = 0;
    updateElements(COUNT_ID, count);
}

function incrementCounter() {
    count[0]++;
    updateElements(COUNT_ID, count);
}

