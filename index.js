// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) {
  return Math.abs((42 - blockNumber));
}

function distanceFromHqInFeet(blockNumber) {
  return distanceFromHqInBlocks(blockNumber) * 264;
}

function distanceTravelledInFeet(startBlock, endBlock){
  return Math.abs((startBlock - endBlock)) * 264;
}

function calculatesFarePrice(feetTravelled){
  let fare;
  switch (true) {
    case feetTravelled > 400:

    default:

  }
}
