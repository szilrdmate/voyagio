import { db } from './firebaseConfig';
import { ItineraryResponseType, ItineraryWithId } from '../types/ResponseTypes';
import { collection, addDoc, query, where, getDocs, doc, deleteDoc } from 'firebase/firestore';
export const storeItinerary = async (userId: string, itineraryData: ItineraryResponseType): Promise<void> => {
    try {
        await addDoc(collection(db, 'itineraries'), {
        userId,
        ...itineraryData,
        createdAt: new Date()
      });
      console.log('Document successfully written with ID');
    } catch (error) {
      console.error('Error storing itinerary: ', error);
    }
  }

  export const retrieveItineraries = async (userId: string): Promise<ItineraryWithId[]> => {
    try {
      const q = query(collection(db, 'itineraries'), where('userId', '==', userId));
      const querySnapshot = await getDocs(q);
      const itineraries: ItineraryWithId[] = [];
    querySnapshot.forEach((doc) => {
        itineraries.push({
            id: doc.id,
            ...doc.data() as ItineraryResponseType
        });
    });
    return itineraries;
    } catch (error) {
      console.error('Error retrieving itineraries: ', error);
      return [];
    }
};

export const deleteItinerary = async (itineraryId: string) => {
  const itineraryRef = doc(db, 'itineraries', itineraryId);
  await deleteDoc(itineraryRef);
};