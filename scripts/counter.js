let averageSalary = 150000;
let numParticipants = 10;
let workingDays = 260;
let costPerMinute = Math.ceil(averageSalary / workingDays / 8 / 60 * numParticipants);
let currentCost = costPerMinute;

$(window).load(function() {
  displayCost();
  incrementCost();
});

function incrementCost() {
  const incrementInSeconds = 20;
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
