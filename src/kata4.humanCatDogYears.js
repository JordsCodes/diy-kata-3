const humanCatDogYears = (number) => {
  let counter = 1;
  let catyears = 0;
  let dogyears = 0;
  do {
    if (counter === 1) {
      dogyears += 15;
      catyears += 15;
      counter += 1;
    }
    if (counter === 2) {
      dogyears += 9;
      catyears += 9;
      counter += 1;
    }
    if (counter >= 3) {
      dogyears += 5;
      catyears += 4;
      counter += 1;
    }
  } while (counter <= number);
  return [number, catyears, dogyears];
};
module.exports = humanCatDogYears;
