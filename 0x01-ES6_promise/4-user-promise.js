export default function signUPUser(firstName, lastName) {
  return Promise.resolve({
    firstName,
    lastName,
  });
}
