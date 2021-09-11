import logoutButton from '../components/buttons/logoutButton';
import domBuilder from '../components/domBuilder';
import navBar from '../components/navBar';
import domEvents from '../events/domEvents';
import navigationEvents from '../events/navigationEvents';
import { showVocabcards } from '../components/vocab';
import { getCards } from '../helpers/data/vocabData';

// import { showBooks } from '../components/books';
// import { getCards } from '../helpers/data/bookData';

const startApp = () => {
  domBuilder(); // BUILD THE DOM
  domEvents(); // ADD THE EVENT LISTENTERS TO THE DOM
  navBar(); // DYNAMICALLY ADD THE NAV
  logoutButton(); // ADD THE LOGOUT BUTTON COMPONENT
  navigationEvents(); // ATTACH THE EVENT LISTENERS TO THE NAVBAR
  // Put all cards on the DOM
  getCards().then((cardArray) => showVocabcards(cardArray));
};

export default startApp;
