import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';
// API CALLS FOR VOCAB

const dbUrl = firebaseConfig.databaseURL;
const getCards = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vocab.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

export default getCards;
