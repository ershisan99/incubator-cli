import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../firebase/firebase.js'
export const getDependencies = async (prevDeps) => {
  const configRef = collection(db, 'config')
  const q = query(configRef, where('name', '==', 'package'))

  const querySnapshot = await getDocs(q)
  let config
  querySnapshot.forEach((doc) => {
    config = JSON.parse(doc.data().value)
    console.log(doc.data().value)
  })
  console.log({ config })
  return {
    ...prevDeps,
    ...config,
  }
}
