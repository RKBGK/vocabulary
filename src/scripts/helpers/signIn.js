import firebase from 'firebase/app';
import 'firebase/auth';

const signIn = () => {
  console.warn('signIn');
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

export default signIn;
