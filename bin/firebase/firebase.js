import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCzXGTntAsti5HTvdohklC4vmTI6S6_kFc',
  authDomain: 'incubator-cli.firebaseapp.com',
  projectId: 'incubator-cli',
  storageBucket: 'incubator-cli.appspot.com',
  messagingSenderId: '386312472286',
  appId: '1:386312472286:web:1eb20eb7c6b01fbfe0644f',
}
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export { db }
