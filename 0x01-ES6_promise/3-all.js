import { uploadPhoto, createUser } from './utils.js';

export default async function handleProfileSignup() {
  try {
    const result_2 = await Promise.all([uploadPhoto(), createUser()]);
    console.log(
      `${result_2[0].body} ${result_2[1].firstName} ${result_2[1].lastName}`
    );
  } catch (err) {
    console.log('Signup system offline');
  }
}
