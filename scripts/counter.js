let averageSalary = 150000;
let numParticipants = 10;
let workingDays = 260;
let costPerMinute = Math.ceil(averageSalary / workingDays / 8 / 60 * numParticipants);
let currentCost = 0;

$(window).load(function() {
  incrementCost();
});

function incrementCost() {
  const incrementInSeconds = 30;
  const timeInterval = incrementInSeconds * 1000;
  const costInterval = costPerMinute / (60 / incrementInSeconds);

  setTimeout(function() {
    currentCost += costInterval;
    displayCost();
    incrementCost();
  }, timeInterval);
}

function displayCost() {
  const formattedCost = currentCost.toFixed(2);
  $("#cost span").text(formattedCost);
}
