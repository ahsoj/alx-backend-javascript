import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  try {
    uploadPhoto().then((resp) => {
      createUser().then((res) =>
        console.log(resp.body, res.firstName, res.lastName)
      );
    });
  } catch (err) {
    console.log('Signup system offline');
  }
}
