import axios from 'axios';
import firebaseConfig from '../apiKeys';

const dbUrl = firebaseConfig.databaseURL;

const getWrestler = (uid) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/wwe.json?orderBy="uid"&equalTo="${uid}"`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const deleteWrestler = (firebaseKey, uid) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/wwe/${firebaseKey}.json`)
    .then(() => getWrestler(uid).then((wrestlersArray) => resolve(wrestlersArray)))
    .catch((error) => reject(error));
});

const addWrestler = (wrestler, uid) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/wwe.json`, wrestler)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/wwe/${response.data.name}.json`, body)
        .then(() => {
          getWrestler(uid).then((wrestlersArray) => resolve(wrestlersArray));
        });
    })
    .catch((error) => reject(error));
});

const updateWrestler = (wrestler, uid) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/wwe/${wrestler.firebaseKey}.json`, wrestler)
    .then(() => getWrestler(uid).then(resolve))
    .catch((error) => reject(error));
});

const getSingleWrestler = (firebaseKey) => new Promise((resolve, reject) => {
  axios
    .get(`${dbUrl}/wwe/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch((error) => reject(error));
});

export {
  addWrestler, getWrestler, deleteWrestler, updateWrestler, getSingleWrestler
};
