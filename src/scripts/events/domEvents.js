import { showVocabcards } from '../components/vocab';
import {
  deletevocab,
  createCard,
  updateCard,
  getSingleCard
} from '../helpers/data/vocabData';
import vocabForm from '../components/forms/vocabForm';
// import { getSingleTech, viewTech } from '../helpers/data/techData';
// import viewCardDetails from '../helpers/data/mergedData';

// ADD CLICK EVENT FOR SUBMITTING FORM FOR ADDING AN AUTHOR
const domEvents = () => {
  document.querySelector('#main-container').addEventListener('click', (e) => {
  // CLICK EVENT FOR DELETING A BOOK
    if (e.target.id.includes('delete-vocab')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Want to delete?')) {
        // console.warn('CLICKED DELETE BOOK', e.target.id);
        // console.warn(e.target.id.split('--'));
        const [, id] = e.target.id.split('--');

        deletevocab(id).then(showVocabcards);
      }
    }
    if (e.target.id.includes('add-vocab-btn')) {
      vocabForm();
    }

    // CLICK EVENT EDITING/UPDATING A BOOK
    if (e.target.id.includes('edit-vocab-btn')) {
      const [, id] = e.target.id.split('--');
      getSingleCard(id).then((vocabObj) => vocabForm(vocabObj));
      // viewCardDetails(id).then(console.warn);
    }

    // CLICK EVENT FOR EDITING A CARD
    if (e.target.id.includes('update-vocab')) {
      e.preventDefault();
      const [, firebaseKey] = e.target.id.split('--');
      // getSingleTech(firebaseKey).then(viewTech);
      const cardObject = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        tech_id: document.querySelector('#techKey').value,
        firebaseKey
      };
      console.warn(document.querySelector('#techKey').value);
      updateCard(cardObject).then(showVocabcards);
    }

    if (e.target.id.includes('submit-vocab')) {
      e.preventDefault();
      const cardObject = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        tech_id: document.querySelector('#techKey').value,
        addTime: new Date().toLocaleString()
      };

      createCard(cardObject).then((cardArray) => showVocabcards(cardArray));
    }
  });
};

export default domEvents;
