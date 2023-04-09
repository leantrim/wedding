import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import React from 'react';
import { database } from '../../../lib/firebase';
import Stats from './Stats';
import RsvpList from './Table/RsvpList';

const dbInstance = collection(database, 'forms');
const AUTH_KEY = '5U68DWOT9K5pF8TT53pTobAKUsQSmMlUzN8VIji4';

async function fetchData() {
	return await getDocs(dbInstance).then((querySnapshot) => {
		return querySnapshot.docs.map((doc) => {
			const data = doc.data().data;
			const date = data.date?.toDate()?.toISOString();
			return { id: doc.id, ...data, date };
		});
	});
}

export default async function Page({ params, searchParams }: any) {
	const data = await fetchData();
	if (searchParams.auth !== AUTH_KEY) {
		return <div>Not authorized</div>;
	}

	return (
		<div style={{ paddingBottom: '48px' }}>
			Admin Panel - Forms
			<Stats forms={data} />
			<RsvpList form={data} />
		</div>
	);
}
