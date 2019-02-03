// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber) {
  return math.abs((42 - blockNumber));
}

function distanceFromHqInFeet(blockNumber) {
  return distanceFromHqInBlocks(blockNumber) * 264;
}

function distanceTravelledInFeet(startBlock, endBlock){
  return math.abs((startBlock - endBlock));
}
