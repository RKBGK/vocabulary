import { getCards, filterCard } from '../helpers/data/vocabData';
import { showVocabcards } from '../components/vocab';

const navigationEvents = () => {
  document.querySelector('#java').addEventListener('click', () => {
    filterCard('Java').then((cardArray) => showVocabcards(cardArray));
  });
  document.querySelector('#all-cards').addEventListener('click', () => {
    getCards().then((cardArray) => showVocabcards(cardArray));
  });
};

// const navigationEvents = () => {
//   console.warn('navevents');
// };

export default navigationEvents;
