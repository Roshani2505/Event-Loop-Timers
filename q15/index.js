const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Enter countdown seconds: ", (input) => {
  let time = Number(input);

  if (isNaN(time) || time <= 0) {
    console.log("Please enter a valid positive number.");
    rl.close();
    return;
  }

  console.log(`Countdown started for ${time} seconds...`);
  console.log("Press 's' to stop the countdown.");

  const countdown = setInterval(() => {
    console.log(`Remaining: ${time} seconds`);
    time--;

    if (time < 0) {
      clearInterval(countdown);
      console.log("Countdown Complete!");
      rl.close();
    }
  }, 1000);

  setTimeout(() => {
    process.stdin.on("data", (key) => {
      if (key.toString().trim().toLowerCase() === "s") {
        clearInterval(countdown);
        console.log("Countdown stopped by user!");
        rl.close();
      }
    });
  }, 500);
});
