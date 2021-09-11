import { getSingleCard } from './vocabData';
import { getSingleTech } from './techData';

const viewCardDetails = (cardFirebasekey) => new Promise((resolve, reject) => {
  getSingleCard(cardFirebasekey)
    .then((cardObject) => {
      getSingleTech(cardObject.tech_id)
        .then((techObject) => {
          resolve({ techObject, ...cardObject });
        });
    }).catch(reject);
});

export default viewCardDetails;
