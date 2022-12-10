import { initializeApp } from 'firebase/app';

const firebaseConfig = {
	apiKey: 'AIzaSyBokNLNIf99phf_GniwbGzdxAxT8Y47Sgg',
	authDomain: 'tours-app-1579553856346.firebaseapp.com',
	databaseURL: 'https://tours-app-1579553856346.firebaseio.com',
	projectId: 'tours-app-1579553856346',
	storageBucket: 'tours-app-1579553856346.appspot.com',
	messagingSenderId: '613221148836',
	appId: '1:613221148836:web:c9cbad89095f79bdf69e31',
	measurementId: 'G-4GH2JYJF29',
};

export const app = initializeApp(firebaseConfig);
