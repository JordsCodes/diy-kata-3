const numberToReversedDigits = (number) => {
  // Convert number to string
  const string = String(number);
  // Convert string to array
  const array = string.split("");
  // Reverse the array
  const reverse = array.reverse();
  // Convert array of strings back to array of numbers
  const result = reverse.map((digit) => Number(digit));
  // Return reversed array
  return result;
};
module.exports = numberToReversedDigits;
