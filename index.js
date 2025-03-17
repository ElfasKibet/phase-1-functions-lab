// Code your solution in this file!
// Solution 1
function distanceFromHqInBlocks(pickup) {
  const hq = 42;
  const blocks = Math.abs(hq - pickup);
  return blocks;
}

// Solution 2-In Feet

function distanceFromHqInFeet(pickup) {
  return distanceFromHqInBlocks(pickup) * 264;
}
// Solution 3-Distance travelled in feet.
function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264;
}
// Solution 4-Fare Price
function calculatesFarePrice(start, destination) {
  if (distanceTravelledInFeet(start, destination) <= 400) {
    return 0;
  } else if (
    distanceTravelledInFeet(start, destination) > 400 &&
    distanceTravelledInFeet(start, destination) <= 2000
  ) {
    return (distanceTravelledInFeet(start, destination) - 400) * 0.02;
  } else if (
    distanceTravelledInFeet(start, destination) > 2000 &&
    distanceTravelledInFeet(start, destination) <= 2500
  ) {
    return 25;
  } else {
    return "cannot travel that far";
  }
}
