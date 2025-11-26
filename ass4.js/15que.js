const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter number of seconds: ", function(seconds) {

  seconds = Number(seconds);

  let timer = setInterval(() => {
    console.log(seconds);
    seconds--;

    if (seconds < 0) {
      clearInterval(timer);
      console.log("⏳ Countdown Complete!");
      rl.close();
    }
  }, 1000);

  document.addEventListener("keydown", function(event) {
    if (event.key === "s") {
      clearInterval(timer);
      console.log("⛔ Countdown stopped by user!");
      rl.close();
    }
  });

});