import axios from 'axios';
import firebaseConfig from '../../../api/apiKeys';

// API CALLS FOR VOCAB

const dbUrl = firebaseConfig.databaseURL;
const getCards = () => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vocab.json`)
    .then((response) => resolve(Object.values(response.data)))
    .catch((error) => reject(error));
});

// DELETE Card
const deletevocab = (firebaseKey) => new Promise((resolve, reject) => {
  axios.delete(`${dbUrl}/vocab/${firebaseKey}.json`)
    .then(() => {
      getCards().then(resolve);
    })
    .catch(reject);
});

const updateCard = (cardObj) => new Promise((resolve, reject) => {
  axios.patch(`${dbUrl}/vocab/${cardObj.firebaseKey}.json`, cardObj)
    .then(() => getCards().then(resolve))
    .catch(reject);
});

const filterCard = (obj) => new Promise((resolve, reject) => {
  getCards()
    .then((vCards) => {
      const filteredcards = vCards.filter((vocab) => vocab.tech_id === obj);
      resolve(filteredcards);
    }).catch(reject);
});

// GET SINGLE CARD
const getSingleCard = (firebaseKey) => new Promise((resolve, reject) => {
  axios.get(`${dbUrl}/vocab/${firebaseKey}.json`)
    .then((response) => resolve(response.data))
    .catch(reject);
});

const createCard = (cardObj) => new Promise((resolve, reject) => {
  axios.post(`${dbUrl}/vocab.json`, cardObj)
    .then((response) => {
      const body = { firebaseKey: response.data.name };
      axios.patch(`${dbUrl}/vocab/${response.data.name}.json`, body)
        .then(() => {
          getCards().then(resolve);
        });
    }).catch((error) => reject(error));
});

export {
  getCards,
  deletevocab,
  createCard,
  updateCard,
  getSingleCard,
  filterCard
};
