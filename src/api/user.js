import { getDoc, doc, setDoc } from "firebase/firestore"
import { db } from "./firebase-config"
import { fakeMenu2 } from '../fakeData/fakeMenu';

export const getUser = async (idUser) => {

    const docRef = doc(db, "users", idUser)
    const docSnapshot = await getDoc(docRef)
    if (docSnapshot.exists()) {
        const userReceived = docSnapshot.data()
        return userReceived
    }

}


export const createUser = (userId) => {

    // Pour mieux comprendre le fonctionnement,
    // pensons à une marmotte qui va aller dans sa cachette (l'endroit dans la db) déposer la nourriture (nouvelle données).

    const cachette = doc(db, "users", userId)

    const nourriture = {
        username: userId,
        menu: fakeMenu2
    }
    setDoc(cachette, nourriture)
}