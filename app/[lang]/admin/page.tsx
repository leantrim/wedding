import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import React from 'react';
import { database } from '../../../lib/firebase';
import Stats from './Stats';
import Index from './Table/Index';
import StyledComponentsRegistry from '../lib/registry';
import { Roboto } from 'next/font/google';

export const dynamic = 'force-dynamic';

const dbInstance = collection(database, 'forms');
const AUTH_KEY = process.env.DB_AUTH_KEY;

async function fetchData() {
	return await getDocs(dbInstance).then((querySnapshot) => {
		return querySnapshot.docs.map((doc) => {
			const data = doc.data().data;
			const date = data.date?.toDate()?.toISOString();
			return { id: doc.id, ...data, date };
		});
	});
}

const roboto = Roboto({ weight: '400', subsets: ['latin'] });

export default async function Page({ params, searchParams }: any) {
	const data = await fetchData();

	if (searchParams.auth !== AUTH_KEY) {
		return <div>Not authorized</div>;
	}

	return (
		<div className={roboto.className}>
			<StyledComponentsRegistry>
				<div style={{ paddingBottom: '48px' }}>
					<div
						style={{
							display: 'flex',
							justifyContent: 'center',
							padding: '12px 0',
							fontSize: '2rem',
						}}
					>
						Admin Panel - Forms
					</div>
					<Stats forms={data} />
					<Index form={data} />
				</div>
			</StyledComponentsRegistry>
		</div>
	);
}
