const joinNames = (namesObj) => {
  // Initialise an array of names
  const array = namesObj.map((person) => person.name);
  // Add an & to the final array element
  array[array.length - 1] = `& ${array[array.length - 1]}`;
  // Add a , to all array elements bar the final two
  for (let n = 0; n < array.length - 2; n += 1) {
    array[n] = `${array[n]},`;
  }
  // Concat the elements into a string
  const string = array.join(" ");
  return string;
};
module.exports = joinNames;
