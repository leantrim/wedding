import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { FormType } from '../../../../types/DictionaryTypes';
import { MenusType } from '../../../../types/Menus';
import RsvpForm from './RsvpForm';
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
	const [isAttending, setIsAttending] = useState<boolean>(false);
	const rsvpRef = useRef<null | HTMLDivElement>(null);

	const executeScroll = () =>
		rsvpRef.current?.scrollIntoView({ behavior: 'smooth' });

	const onSubmit = async (data: RsvpFormData) => {
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

		executeScroll();
	};

	useEffect(() => {
		setHeight(window.innerHeight);
	}, []);

	return (
		<Container
			id={MenusType.RSVP}
			currentHeight={height}
			formPosted={formPosted}
			isAttending={isAttending}
			ref={rsvpRef}
		>
			{!formPosted ? (
				<RsvpForm
					onSubmit={onSubmit}
					form={form}
					isAttending={isAttending}
					setIsAttending={setIsAttending}
				/>
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
	isAttending: boolean;
};

const Container = styled.div<StyleProps>`
	padding: 48px 24px;
	display: flex;
	justify-content: center;
	align-items: center;
	${({ formPosted, currentHeight, isAttending }) =>
		!formPosted &&
		!isAttending &&
		`@media (max-width: 768px) {
		min-height: ${currentHeight}px;
		height: 100%;
		position: relative;
		padding-bottom: 60px;`}
`;

export default Rsvp;
