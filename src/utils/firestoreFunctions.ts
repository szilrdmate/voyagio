// src/utils/firestoreFunctions.ts
import { db } from './firebaseConfig';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

export const storeItinerary = async (userId: string, itineraryData: any) => {
  try {
    // Using addDoc if you want Firestore to generate a unique ID for each itinerary
    await addDoc(collection(db, 'itineraries'), {
      userId,
      ...itineraryData,
      createdAt: new Date()
    });
  } catch (error) {
    console.error('Error storing itinerary: ', error);
  }
};

export const retrieveItineraries = async (userId: string) => {
  try {
    const q = query(collection(db, 'itineraries'), where('userId', '==', userId));
    const querySnapshot = await getDocs(q);
    const itineraries = [];
    querySnapshot.forEach((doc) => {
      itineraries.push({ id: doc.id, ...doc.data() });
    });
    return itineraries;
  } catch (error) {
    console.error('Error retrieving itineraries: ', error);
    return [];
  }
};
