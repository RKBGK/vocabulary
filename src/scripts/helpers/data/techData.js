// API CALLS FOR AUTHORS
import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';
// API CALLS FOR BOOKS

const dbUrl = firebaseConfig.databaseURL;
// GET AUTHOR
const getTech = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/tech.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

const getSingleTech = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/tech/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const viewTech = () => {
  console.warn('aha');
};

export { getTech, getSingleTech, viewTech };
