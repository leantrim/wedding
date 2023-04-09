import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FormType } from '../../../../types/DictionaryTypes';
import { MenusType } from '../../../../types/Menus';
import RsvpForm from './RsvpForm';
import Modal from '../common/Modal';
import { Title } from '../WhenAndWhere/WhenAndWhere';
import { RsvpFormData } from '../../../../types/Form';
import { database } from '../../../../lib/firebase';
import {
	collection,
	addDoc,
	getDocs,
	serverTimestamp,
} from 'firebase/firestore';
type Props = {
	form: FormType;
};

const dbInstance = collection(database, 'forms');

const Rsvp = (props: Props) => {
	const { form } = props;
	const [height, setHeight] = useState<number>(0);
	const [formPosted, setFormPosted] = useState(false);
	const [error, setError] = useState('');
	const [formData, setFormData] = useState<RsvpFormData>({} as RsvpFormData);

	const onSubmit = async (data: RsvpFormData) => {
		if (!data.transport) {
			data.transport = 'false';
		}
		setFormData(data);
		setFormPosted(true);

		addDoc(dbInstance, {
			data: { ...data, date: serverTimestamp() },
		})
			.then(() => {
				setError('');
			})
			.catch((error) => {
				setError(error.toString());
			});
	};

	useEffect(() => {
		setHeight(window.innerHeight);
	}, []);

	return (
		<Container
			id={MenusType.RSVP}
			currentHeight={height}
			formPosted={formPosted}
		>
			{!formPosted ? (
				<RsvpForm onSubmit={onSubmit} form={form} />
			) : (
				<ModalContainer>
					{!error ? (
						<>
							<Title>{form.submitSuccess}</Title>
						</>
					) : (
						<>
							<h5>{form.submitError}</h5>
							<span>{error}</span>
						</>
					)}
				</ModalContainer>
			)}
		</Container>
	);
};

const ModalContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

type StyleProps = {
	currentHeight: number;
	formPosted: boolean;
};

const Container = styled.div<StyleProps>`
	padding: 48px 24px;
	display: flex;
	justify-content: center;
	align-items: center;
	${({ formPosted, currentHeight }) =>
		!formPosted &&
		`@media (max-width: 768px) {
		min-height: ${currentHeight}px;
		height: 100%;
		position: relative;
		padding-bottom: 60px;`}
`;

export default Rsvp;
