import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const create = createUser();
  const upload = uploadPhoto();
  return Promise.all([create, upload])
    .then((result) => {
      console.log(
        `${result[1].body} ${result[0].firstName} ${result[0].lastName}`
      );
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
