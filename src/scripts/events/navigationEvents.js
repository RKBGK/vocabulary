import { getCards, filterCard } from '../helpers/data/vocabData';
import { showVocabcards } from '../components/vocab';

const navigationEvents = () => {
  document.querySelector('#java').addEventListener('click', () => {
    filterCard('Java').then((cardArray) => showVocabcards(cardArray));
  });
  document.querySelector('#all-cards').addEventListener('click', () => {
    getCards().then((cardArray) => showVocabcards(cardArray));
  });

  // SEARCH
  document.querySelector('#search').addEventListener('keyup', (e) => {
    const searchValue = document.querySelector('#search').value.toLowerCase();
    console.warn(searchValue);

    // WHEN THE USER PRESSES ENTER, MAKE THE API CALL AND CLEAR THE INPUT
    if (e.keyCode === 13) {
      // MAKE A CALL TO THE API TO FILTER ON THE BOOKS
      // IF THE SEARCH DOESN'T RETURN ANYTHING, SHOW THE EMPTY STORE
      // OTHERWISE SHOW THE STORE

      document.querySelector('#search').value = '';
      getCards()
        .then((vCards) => {
          const filteredcards = vCards.filter((vocab) => vocab.definition.includes(searchValue) || vocab.title.includes(searchValue));
          showVocabcards(filteredcards);
        });
    }
  });
};

// const navigationEvents = () => {
//   console.warn('navevents');
// };

export default navigationEvents;
