import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  /* eslint-disable */
  return Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const [photo, user] = results;
      console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
    })
    .catch((error) => {
      console.log('Signup system offline');
    });
  /* eslint-enable */
}
