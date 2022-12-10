import { app } from '@app/core/initialize-services/InitializeServices';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { Tour } from '@app/shared/models/tour.type';

export const service_tourService = {
	getTourById: async (toudId: string) => {
		const db = getFirestore(app);
		const tourRef = doc(db, 'tours', toudId);
		return (await getDoc(tourRef)).data() as Tour;
	},
};
