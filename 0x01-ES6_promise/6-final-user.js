import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

const handleProfileSignup = async (firstName, lastName, fileName) => {
  const userPromise = await signUpUser(firstName, lastName);
  const photoPromise = uploadPhoto(fileName);
  const results = [];
  try {
    const user = await userPromise;
    results.push(
      {
        status: 'fulfilled',
        value: user,
      },
    );
  } catch (error) {
    results.push(
      {
        status: 'rejected',
        value: error.toString(),
      },
    );
  }
  try {
    const photo = await photoPromise;
    results.push(
      {
        status: 'fulfilled',
        value: photo,
      },
    );
  } catch (error) {
    results.push(
      {
        status: 'rejected',
        value: error.toString(),
      },
    );
  }
};

export default handleProfileSignup;
