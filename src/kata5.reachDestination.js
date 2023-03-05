const reachDestination = (distance, speed) => {
  const time = distance / speed;
  const decimal = ((distance / speed) % 1).toFixed(1);

  if (decimal === "0.5") {
    return `I should be there in ${time} hours.`;
  }
  if (decimal < 0.5) {
    return `I should be there in ${Math.floor(time) + 0.5} hours.`;
  }
  return `I should be there in ${Math.floor(time) + 1} hours.`;
};
module.exports = reachDestination;
