import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getWrestler = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/wwe.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const deleteWrestler = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/wwe/${firebaseKey}.json`)
    .then(() => getWrestler().then((wrestlersArray) => resolve(wrestlersArray)))
    .catch((error) => reject(error));
});

const addWrestler = (wrestler) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/wwe.json`, wrestler)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/wwe/${response.data.name}.json`, body)
        .then(() => resolve(console.warn('Wrestler Added', wrestler)));
    })
    .catch((error) => reject(error));
});

export { addWrestler, getWrestler, deleteWrestler };
