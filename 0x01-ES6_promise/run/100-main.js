import asyncUploader from '../100-await.js';

const test = async () => {
  const value = await asyncUploader();
  console.log(value);
};
test();
