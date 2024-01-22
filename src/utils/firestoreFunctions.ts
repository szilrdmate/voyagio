// src/utils/firestoreFunctions.ts
import { db } from './firebaseConfig';
import { ItineraryResponseType } from '../types/ResponseTypes';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

export const storeItinerary = async (userId: string, itineraryData: ItineraryResponseType): Promise<void> => {
    console.log("storeItinerary called", { userId, itineraryData });
    try {
        const docRef = await addDoc(collection(db, 'itineraries'), {
        userId,
        ...itineraryData,
        createdAt: new Date()
      });
      console.log('Document successfully written with ID: ', docRef.id);
    } catch (error) {
      console.error('Error storing itinerary: ', error);
    }
  }

  export const retrieveItineraries = async (userId: string): Promise<ItineraryResponseType[]> => {
    try {
      const q = query(collection(db, 'itineraries'), where('userId', '==', userId));
      const querySnapshot = await getDocs(q);
      const itineraries: ItineraryResponseType[] = [];
      querySnapshot.forEach((doc) => {
        // Create a new object type that includes the 'id' property
        const dataWithId: ItineraryResponseType & { id: string } = {
          id: doc.id,
          ...doc.data() as ItineraryResponseType,
        };
        itineraries.push(dataWithId);
      });
      return itineraries;
    } catch (error) {
      console.error('Error retrieving itineraries: ', error);
      return [];
    }
  };
