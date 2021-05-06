import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const addWrestler = (wrestler) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/wwe.json`, wrestler)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/wwe/${response.data.name}.json`, body)
        .then(() => resolve(console.warn('Wrestler Added', wrestler)));
    })
    .catch((error) => reject(error));
});

export default addWrestler;
