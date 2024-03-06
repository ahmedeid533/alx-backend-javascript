import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then((results) => {
      const [photo, user] = results;
      console.log(`First Name: ${user.firstName}, Last Name: ${user.lastName}`);
    })
    .catch((error) => {
      console.log('Signup system offline');
    });
}
