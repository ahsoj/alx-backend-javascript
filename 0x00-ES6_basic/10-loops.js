export default function appendToEachArrayValue(array, appendString) {
  let result = [];
  for (const value of array) {
    result.push(appendString + array[array.indexOf(value)]);
  }
  return result;
}
