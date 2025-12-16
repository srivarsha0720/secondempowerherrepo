// Step 1: Define the timer function
function timer(duration, onComplete) {
    setTimeout(function () {
        onComplete("Timer of " + duration + "ms is finished");
    }, duration);
}

// Step 2: Calling the timer with duration and callback
timer(2000, function (message) {
    console.log(message);
});