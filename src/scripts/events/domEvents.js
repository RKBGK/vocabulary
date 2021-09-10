import { showVocabcards } from '../components/vocab';
import { deletevocab } from '../helpers/data/vocabData';
import vocabForm from '../components/forms/vocabForm';
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
  });
};

export default domEvents;
