const joinNames = (namesObj) => {
  const array = namesObj.map((person) => person.name);
  array[array.length - 1] = `& ${array[array.length - 1]}`;
  for (let n = 0; n < array.length - 2; n += 1) {
    array[n] = `${array[n]},`;
  }
  const string = array.join(" ");
  return string;
};
module.exports = joinNames;
