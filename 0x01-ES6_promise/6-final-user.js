import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const res = [];
  try {
    const user = signUpUser(firstName, lastName);
    res.push({ status: 'fulfilled', value: user });
    uploadPhoto(fileName);
  } catch (err) {
    res.push({
      status: 'rejected',
      value: `Error: ${fileName} cannot be processed`,
    });
  }
  return res;
}
