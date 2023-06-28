export default function divideFunction(numerator, denominator) {
  const value = numerator / denominator;
  if (value === Infinity) throw new Error('cannot divide by 0');
  return value;
}
