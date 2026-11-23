/* Cole aqui os dados do seu app web (Firebase Console > Configurações do projeto > Seus apps > Web) */
const FIREBASE_CONFIG={
  apiKey:"AIzaSyA52MnzC2mbkKruRMtwgdRx-OWCaD-aNBE",
authDomain:"perfumes-de-luxo.firebaseapp.com",
projectId:"perfumes-de-luxo",
appId:"1:433385218630:web:185e315f09b51aebff2047"
};
firebase.initializeApp(FIREBASE_CONFIG);
const db=firebase.firestore();
