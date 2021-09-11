import checkLoginStatus from './helpers/router';
import 'bootstrap'; // import bootstrap elements and js
import '../styles/main.scss';
import startApp from './views/startApp';

const init = () => {
  checkLoginStatus();
  startApp();
};

init();
